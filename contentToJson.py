import json
from bs4 import BeautifulSoup

def parse_exercise(exercise_div):
    exercise = {}
    
    # Extract the inner HTML of the sentence, preserving ruby annotations
    sentence = exercise_div.find("div", class_="sentence")
    if sentence:
        exercise["sentence"] = ''.join(str(tag) for tag in sentence.contents).strip()

    translation = exercise_div.find("div", class_="translation")
    if translation:
        exercise["translation"] = translation.get_text().strip()

    notes_div = exercise_div.find("div", class_="notes")
    if notes_div:
        notes = []
        for note_div in notes_div.find_all("div", class_="note"):
            notes.append(note_div.get_text().strip())
        exercise["notes"] = notes

    return exercise

def html_to_json(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    exercises = []

    # Loop through all 'number' and 'exercise' pairs
    number_divs = soup.find_all("div", class_="number")
    for number_div in number_divs:
        exercise_entry = {}
        exercise_entry["id"] = number_div.get("id")
        
        # Handle counter text inside 'counter' span or directly within 'number' div
        counter = number_div.find("span", class_="counter")
        if counter:
            exercise_entry["counter"] = counter.get_text().strip()
        else:
            exercise_entry["counter"] = number_div.get_text().strip()

        # Handle kanji header if present
        kanji_header = number_div.find("span", class_="kanjiHeader")
        if kanji_header:
            exercise_entry["kanjiHeader"] = kanji_header.get_text().strip()

        # Parse the corresponding exercise content
        next_sibling = number_div.find_next_sibling("div", class_="exercise")
        if next_sibling:
            exercise_entry["exercise"] = parse_exercise(next_sibling)
        
        exercises.append(exercise_entry)

    return exercises

def convert_html_to_json(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as file:
        html_content = file.read()
    
    exercises_json = html_to_json(html_content)
    
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(exercises_json, json_file, ensure_ascii=False, indent=4)

# Run the conversion
convert_html_to_json("content.html", "content.json")
