import json
from bs4 import BeautifulSoup

# Read the HTML file
with open('content.html', 'r', encoding='utf-8') as file:
    content = file.read()

# Parse the HTML content
soup = BeautifulSoup(content, 'html.parser')

# Initialize an empty list to store the JSON data
data = []

# Find all the 'number' and 'exercise' divs
numbers = soup.find_all('div', class_='number')
exercises = soup.find_all('div', class_='exercise')

# Iterate through the numbers and exercises
for number, exercise in zip(numbers, exercises):
    # Extract the number and kanjiHeader if present
    number_id = number.get('id')
    kanji_header = number.find('span', class_='kanjiHeader')
    kanji_header_text = kanji_header.text if kanji_header else None

    # Extract the sentence, ruby, translation, and notes
    sentence_div = exercise.find('div', class_='sentence')
    sentence = sentence_div.text.strip()
    ruby = str(sentence_div.find('ruby'))
    translation = exercise.find('div', class_='translation').text.strip()
    notes_divs = exercise.find_all('div', class_='note')
    notes = [{"note": note.text.strip()} for note in notes_divs]

    # Create the JSON structure
    exercise_data = {
        "sentence": sentence,
        "ruby": ruby,
        "translation": translation,
        "notes": notes
    }

    number_data = {
        "number": number_id,
        "exercise": exercise_data
    }

    if kanji_header_text:
        number_data["kanjiHeader"] = kanji_header_text

    # Append the data to the list
    data.append(number_data)

# Convert the list to JSON
json_data = json.dumps(data, ensure_ascii=False, indent=4)

# Write the JSON data to a file
with open('content.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)

print("JSON data has been written to output.json")
