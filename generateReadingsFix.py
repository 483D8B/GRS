import json

# Funzione per determinare se la lettura è in hiragana o katakana
def is_hiragana(reading):
    return all('ぁ' <= char <= 'ん' for char in reading)

def is_katakana(reading):
    return all('ァ' <= char <= 'ン' for char in reading)

# Funzione per determinare se una lettura è 'kun' o 'on' (convenzionale)
def determine_reading_type(reading):
    # Se la lettura è in hiragana, è una lettura 'kun'
    if is_hiragana(reading):
        return 'kun'
    # Se la lettura è in katakana, è una lettura 'on'
    elif is_katakana(reading):
        return 'on'
    # Altrimenti, considera altre possibili letture come 'on'
    return 'on'

# Carica il file JSON di input
with open('generatedReadings.json', 'r', encoding='utf-8') as infile:
    data = json.load(infile)

# Modifica il tipo di lettura per ciascun kanji
for entry in data:
    for reading_entry in entry['readings']:
        reading = reading_entry['reading']
        # Determina se la lettura è kun o on
        new_type = determine_reading_type(reading)
        reading_entry['type'] = new_type

# Salva i dati modificati in un nuovo file JSON
with open('generatedReadingsFixed.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=4)

print("File aggiornato e salvato come 'generatedReadingsFixed.json'.")
