import json

def generate_js_object(data):
    chapters = {}
    
    # Process each item in the data
    for item in data:
        counter = item.get('counter', '')
        chapter_number, lesson_number = counter.split('-')
        
        # Initialize the chapter in the dictionary if not already present
        if chapter_number not in chapters:
            chapters[chapter_number] = {'start_id': item['id'], 'end_id': item['id']}
        else:
            # Update the end_id for the chapter
            chapters[chapter_number]['end_id'] = item['id']
    
    # Format the JavaScript object
    js_object = 'const chapters = ' + json.dumps(chapters, indent=4) + ';'
    return js_object

def main():
    # Load JSON data
    with open('content.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Generate the JavaScript object
    js_code = generate_js_object(data)
    
    # Write the JavaScript object to a file
    with open('chapters.js', 'w', encoding='utf-8') as f:
        f.write(js_code)
    print("JavaScript object has been generated and saved to chapters.js")

if __name__ == "__main__":
    main()
