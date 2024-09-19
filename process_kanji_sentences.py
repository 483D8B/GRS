import json
import re
from bs4 import BeautifulSoup

def extract_readings_and_sentences(sentence):
    """Extract readings and their corresponding sentences."""
    soup = BeautifulSoup(sentence, 'html.parser')
    readings = {}
    
    # Find all <ruby> elements
    for ruby in soup.find_all('ruby'):
        kanji = ruby.get_text(strip=True)
        rt = ruby.find('rt')
        if rt:
            reading = rt.get_text(strip=True)
            if reading not in readings:
                readings[reading] = []
            readings[reading].append(kanji)
    
    return readings

def main():
    # Load the JSON file with sentences containing the kanji
    with open('kanji_sentences_受.json', 'r', encoding='utf-8') as file:
        sentences = json.load(file)
    
    # Create a dictionary to store sentences by reading
    readings_dict = {}

    # Process each sentence
    for entry in sentences:
        sentence = entry['sentence']
        entry_id = entry['id']
        counter = entry['counter']

        # Extract readings and their corresponding kanji
        readings = extract_readings_and_sentences(sentence)
        
        # Store sentences by reading
        for reading, kanji_list in readings.items():
            if reading not in readings_dict:
                readings_dict[reading] = []
            readings_dict[reading].append({
                'id': entry_id,
                'counter': counter,
                'sentence': sentence,
                'kanji': kanji_list
            })

    # Save the grouped sentences to a new JSON file
    output_filename = 'sentences_by_reading.json'
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        json.dump(readings_dict, outfile, ensure_ascii=False, indent=2)

    print(f"Sentences grouped by reading have been saved to '{output_filename}'")

if __name__ == '__main__':
    main()
