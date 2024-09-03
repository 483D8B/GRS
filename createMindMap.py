import json
from collections import defaultdict
from bs4 import BeautifulSoup

def extract_ruby_words(sentence):
    """
    Extract words and their pronunciations from a sentence using <ruby> tags.
    This will return full words (kanji combinations) associated with their pronunciations.
    """
    ruby_words = []
    soup = BeautifulSoup(sentence, 'html.parser')
    
    current_word = ''
    current_pronunciation = ''
    
    for ruby in soup.find_all('ruby'):
        word = ruby.get_text()  # Get the kanji part of the word
        pronunciation = ruby.find('rt').get_text()  # Get the furigana (reading)
        
        current_word += word
        current_pronunciation += pronunciation

        ruby_words.append((current_word, current_pronunciation))
    
    return ruby_words

def group_words_by_kanji(exercises):
    """
    Group words containing the same kanji by their pronunciations.
    This function handles words as complete units, rather than individual kanji.
    Includes the id of the exercise where the word was found.
    Ensures no duplicates for the same pronunciation.
    """
    grouped_words = defaultdict(lambda: defaultdict(dict))
    current_kanji = None

    for exercise in exercises:
        if 'kanjiHeader' in exercise:
            current_kanji = exercise['kanjiHeader']

        if not current_kanji:
            continue

        exercise_id = exercise.get('id')
        sentence = exercise['exercise'].get('sentence', '')
        ruby_words = extract_ruby_words(sentence)

        for word, pronunciation in ruby_words:
            if current_kanji in word:
                # Only add if this pronunciation is not already present for this kanji
                if pronunciation not in grouped_words[current_kanji]:
                    grouped_words[current_kanji][pronunciation] = {'word': word, 'id': exercise_id}

    # Convert defaultdict to regular dict for JSON serialization
    return {kanji: dict(pronunciations) for kanji, pronunciations in grouped_words.items()}

def main(input_file, output_file):
    # Load the JSON content from file
    with open(input_file, 'r', encoding='utf-8') as file:
        exercises = json.load(file)

    # Group words by kanji and pronunciation
    grouped_words = group_words_by_kanji(exercises)

    # Save the results to a JSON file
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(grouped_words, json_file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    main('content.json', 'grouped_words_unique.json')
