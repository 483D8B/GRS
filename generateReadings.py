import json
import re
from collections import OrderedDict

def generate_kanji_data(input_file, output_file):
    # Read the JSON data
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Extract kanji from kanjiHeader, preserving order
    kanji_list = []
    for item in data:
        if 'kanjiHeader' in item and item['kanjiHeader'] not in kanji_list:
            kanji_list.append(item['kanjiHeader'])

    # Dictionary to store readings for each kanji
    kanji_readings = OrderedDict((kanji, set()) for kanji in kanji_list)

    # Process sentences to extract readings
    for item in data:
        sentence = item['exercise']['sentence']
        ruby_patterns = re.findall(r'<ruby>([^<]+)<rt>([^<]+)</rt></ruby>', sentence)
        for kanji_compound, reading in ruby_patterns:
            if kanji_compound[0] in kanji_list:  # Check if the first character is our target kanji
                kanji_readings[kanji_compound[0]].add(reading)

    # Generate JavaScript code
    js_code = "const kanjiData = [\n"
    for kanji in kanji_list:
        js_code += f"    {{\n        kanji: \"{kanji}\",\n        readings: [\n"
        for reading in sorted(kanji_readings[kanji]):  # Sort readings for consistency
            reading_type = "on" if all(char.isalpha() and char.isupper() for char in reading) else "kun"
            js_code += f"            {{ type: \"{reading_type}\", reading: \"{reading}\", vocab: [\"\"] }},\n"
        js_code = js_code.rstrip(",\n") + "\n        ]\n    },\n"
    js_code = js_code.rstrip(",\n") + "\n];\n"

    # Write the JavaScript code to a file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)

# Usage
input_file = 'content.json'
output_file = 'generatedReadings.js'
generate_kanji_data(input_file, output_file)