
function searchFunction() {
    // Declare variables    
    const input = document.getElementById('search');
    const container = document.getElementById("container");
    const exercises = container.getElementsByClassName('exercise');

    let filters = input.value.split(' ').map(word => IMEMode === 'toHiragana' ? wanakana.toHiragana(word) : wanakana.toKatakana(word));

    // Mapping from Western numbers to Japanese kanji numbers
    const numberMapping = {
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九",
        "10": "十"
    };

    // Reverse mapping from Japanese kanji numbers to Western numbers
    let reverseNumberMapping = {};
    for (let key in numberMapping) {
        reverseNumberMapping[numberMapping[key]] = key;
    }

    if (toggleStyle == false) {

        // Loop through all exercise items
        for (let i = 0; i < exercises.length; i++) {
            let sentence = exercises[i].getElementsByClassName("sentence")[0];
            let number = exercises[i].previousElementSibling;
            let txtValue = sentence.textContent || sentence.innerText;

            // remove the highlighting
            sentence.innerHTML = txtValue.replace(/<span class="underline">(.*?)<\/span>/gi, '$1');

            let matched = false;

            // If the input value is composed only of space characters, display all exercises and return
            if (/^\s*$/.test(input.value)) {
                exercises[i].style.display = "";
                if (exercises[i].previousElementSibling) {
                    exercises[i].previousElementSibling.style.display = ""; // show the number
                }
                continue;
            }

            // Loop through all filters
            for (let j = 0; j < filters.length; j++) {

                // Skip if the filter is an empty string
                if (filters[j] === '') continue;

                // Check both Hiragana and Katakana matches
                let hiraganaMatch = wanakana.toHiragana(txtValue).indexOf(wanakana.toHiragana(filters[j])) > -1;
                let katakanaMatch = wanakana.toKatakana(txtValue).indexOf(wanakana.toKatakana(filters[j])) > -1;

                // Check if the filter is a Western number and highlight the corresponding Japanese kanji number
                if (numberMapping[filters[j]] && txtValue.includes(numberMapping[filters[j]])) {
                    matched = true;
                    let regex = new RegExp(numberMapping[filters[j]], 'gi');
                    sentence.innerHTML = sentence.innerHTML.replace(regex, '<span class="underline">$&</span>');
                }

                // Check if the filter is a Japanese kanji number and highlight the corresponding Western number
                if (reverseNumberMapping[filters[j]] && txtValue.includes(reverseNumberMapping[filters[j]])) {
                    matched = true;
                    let regex = new RegExp(reverseNumberMapping[filters[j]], 'gi');
                    sentence.innerHTML = sentence.innerHTML.replace(regex, '<span class="underline">$&</span>');
                }

                if (hiraganaMatch || katakanaMatch) {
                    matched = true;
                    // underline the matched content
                    let regex = new RegExp(`(${wanakana.toHiragana(filters[j])}|${wanakana.toKatakana(filters[j])})`, 'gi');
                    sentence.innerHTML = sentence.innerHTML.replace(regex, '<span class="underline">$&</span>');
                }
            }

            if (matched || !input.value.trim()) {
                exercises[i].style.display = "";
                number.style.display = ""; // show the number
            } else {
                exercises[i].style.display = "none";
                number.style.display = "none"; // hide the number
            }
        }
    }
}
