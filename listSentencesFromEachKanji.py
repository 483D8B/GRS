import json
import re

# Load the JSON file
with open('content.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Ask the user for a specific kanji to search for
specific_kanji = input("Enter the kanji you want to search for: ")

# Create an empty list to store the sentences that contain the specific kanji
kanji_sentences = []

# Iterate through each entry and check if the specific kanji appears in the sentence
for entry in data:
    sentence = entry['exercise']['sentence']
    counter = entry['counter']
    entry_id = entry['id']
    
    # Check if the specific kanji is in the current sentence
    if re.search(specific_kanji, sentence):
        kanji_sentences.append({
            'id': entry_id,
            'counter': counter,
            'sentence': sentence
        })

# Save the grouped sentences to a new JSON file
output_filename = f"kanji_sentences_{specific_kanji}.json"
with open(output_filename, 'w', encoding='utf-8') as outfile:
    json.dump(kanji_sentences, outfile, ensure_ascii=False, indent=2)

print(f"Sentences containing the kanji '{specific_kanji}' have been saved to '{output_filename}'")
