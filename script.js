function toggleVisibility(event) {
    if (event.target.tagName === 'RUBY' || event.target.closest('ruby')) {
        var ruby = event.target.closest('ruby');
        var rts = ruby.getElementsByTagName('rt');
        for (let j = 0; j < rts.length; j++) {
            if (rts[j].style.visibility === 'hidden') {
                rts[j].style.visibility = 'visible';
            } else {
                rts[j].style.visibility = 'hidden';
            }
        }
    } else if (event.target.classList.contains('close-note')) {
        let note = event.target.closest('.notes');
        note.innerHTML = 'Show notes';
    } else if (event.target.classList.contains('notes')) {
        let note = event.target;
        let originalText = note.getAttribute('data-original-text');
        note.innerHTML = originalText + ' <span class="close-note">Close</span>';
    }
}


window.onload = function () {
    fetch('content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('container').innerHTML = data;

            // Get all exercise elements that contain a sentence with the 'first' class
            var exercises = document.querySelectorAll('.exercise .sentence.first');
            // Loop through all exercise elements
            for (let i = 0; i < exercises.length; i++) {
                // Get the preceding number div
                var numberDiv = exercises[i].parentElement.previousElementSibling;


                // Add a new class to the numberDiv
                numberDiv.classList.add('colouredNumber');
            }

            var numbers = document.querySelectorAll('#container .number');
            var lastNumber = numbers[numbers.length - 1];

            var counterDiv = document.getElementById('counter');

            counterDiv.innerHTML = lastNumber.id + ' <i class="fa-solid fa-language"></i>';



            // Add event listener to the container for event delegation
            document.getElementById('container').addEventListener('click', toggleVisibility);

            // Store original text for notes
            var notes = document.getElementsByClassName('notes');
            for (let i = 0; i < notes.length; i++) {
                let originalText = notes[i].innerHTML;
                notes[i].setAttribute('data-original-text', originalText);
                notes[i].innerHTML = 'Show notes';
            }

            // Set initial state for furigana
            var furiganas = document.getElementsByClassName('sentence');
            for (let i = 0; i < furiganas.length; i++) {
                var rts = furiganas[i].getElementsByTagName('rt');
                for (let j = 0; j < rts.length; j++) {
                    rts[j].style.visibility = 'hidden'; // Set initial state
                }
            }
        })
        .catch(error => console.error('Error loading content:', error));


    // Attach event listeners
    document.getElementById('useFurigana').addEventListener('change', handleFuriganaCheckboxChange);
    // Attach the debounced search function to the input event
    document.getElementById('search').addEventListener('input', debounceSearch);
    // Initial binding on page load
    bindIME();
}

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

// Debounce timer variable to avoid too many search function calls
let debounceTimer;

function debounceSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchFunction, 300); // Adjust the delay as needed
}

function searchFunction() {
    // 1. Get the search input value and trim any surrounding whitespace
    const input = document.getElementById('search').value.trim();

    // 2. If the input value is composed only of space characters, display all exercises and return
    if (/^\s*$/.test(input)) {
        displayAllExercises();
        return;
    }

    // 3. Convert input into both Hiragana and Katakana for searching
    const filters = [input].map(word => {
        return IMEMode === 'toHiragana'
            ? { hiragana: wanakana.toHiragana(word), katakana: wanakana.toKatakana(word) }
            : { hiragana: wanakana.toHiragana(word), katakana: wanakana.toKatakana(word) };
    });

    // 4. Get the states of the checkboxes
    const useFurigana = document.getElementById('useFurigana').checked;
    const useKanji = document.getElementById('useKanji').checked;
    const useTranslation = document.getElementById('useTranslation').checked;

    // 5. Get all the 'exercise' elements, which contain the sentences
    const exercises = document.getElementsByClassName('exercise');

    // Initialize an empty array to hold elements that need highlighting
    let elementsToHighlight = [];
    let matchCount = 0;

    // 6. Loop through all 'exercise' elements
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        const sentence = exercise.getElementsByClassName('sentence')[0];
        const translation = exercise.getElementsByClassName('translation')[0];

        // Skip if the elements are missing
        if (!sentence || !translation) continue;

        const sentenceText = sentence.textContent.toLowerCase();
        const translationText = translation.textContent.toLowerCase();
        let furiganaText = "";

        if (useFurigana) {
            const rts = sentence.getElementsByTagName('rt');
            for (let j = 0; j < rts.length; j++) {
                furiganaText += rts[j].textContent.toLowerCase();
            }
        }

        let shouldDisplay = false;
        let highlightNeeded = false;

        // Check for matches in the sentence, furigana, and translation
        for (const filter of filters) {
            if (useKanji && (sentenceText.includes(filter.hiragana) || sentenceText.includes(filter.katakana))) {
                highlightNeeded = true;
                shouldDisplay = true;
            }
            if (useFurigana && (furiganaText.includes(filter.hiragana) || furiganaText.includes(filter.katakana))) {
                highlightNeeded = true;
                shouldDisplay = true;
            }
            if (useTranslation && (translationText.includes(filter.hiragana) || translationText.includes(filter.katakana))) {
                highlightNeeded = true;
                shouldDisplay = true;
            }
        }

        // Update display status and highlight elements
        exercise.style.display = shouldDisplay ? "" : "none";
        exercise.previousElementSibling.style.display = shouldDisplay ? "" : "none";

        // Collect elements for highlighting
        if (highlightNeeded) {
            elementsToHighlight.push({ element: sentence, text: sentenceText });
            elementsToHighlight.push({ element: translation, text: translationText });
            matchCount++;
        }
    }

    // Highlight matching elements
    highlightMatches(elementsToHighlight, filters.flatMap(filter => [filter.hiragana, filter.katakana]));

    // Update the filteredNumber div to show how many results were found
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : 'No matches found';
}

// Function to display all exercises and clear highlighting
function displayAllExercises() {
    const exercises = document.getElementsByClassName('exercise');
    for (let i = 0; i < exercises.length; i++) {
        exercises[i].style.display = "";
        if (exercises[i].previousElementSibling) {
            exercises[i].previousElementSibling.style.display = ""; // show the number
        }
        // Clear any existing highlights
        clearElementHighlight(exercises[i].getElementsByClassName('sentence')[0]);
        clearElementHighlight(exercises[i].getElementsByClassName('translation')[0]);
    }
    // Clear the filtered number display
    document.getElementById('filteredNumber').innerText = ' ';
}

// Function to highlight matched text
function highlightMatches(elements, inputs) {
    elements.forEach(({ element, text }) => {
        let html = element.getAttribute('data-original-content') || element.innerHTML;
        const regex = new RegExp(`(${inputs.join('|')})`, 'gi');

        // Replace text with highlighted version
        const newHTML = html.replace(regex, `<span class="highlight">$1</span>`);
        if (newHTML !== element.innerHTML) {
            element.innerHTML = newHTML;
        }

        // Store the original content if not already stored
        if (!element.hasAttribute('data-original-content')) {
            element.setAttribute('data-original-content', html);
        }
    });
}

// Function to clear highlighting from an individual element
function clearElementHighlight(element) {
    if (element && element.hasAttribute('data-original-content')) {
        element.innerHTML = element.getAttribute('data-original-content');
        element.removeAttribute('data-original-content');
    }
}



// Initialize variables
let IMEMode = 'toHiragana'; // Default to Hiragana mode
const searchInput = document.getElementById('search');

// Bind the input to the current IMEMode
function bindIME() {
    wanakana.bind(searchInput, { IMEMode: IMEMode });
}

// Function to toggle IMEMode between 'toHiragana' and 'toKatakana'
function toggleIMEMode() {
    IMEMode = IMEMode === 'toHiragana' ? 'toKatakana' : 'toHiragana';
    bindIME(); // Re-bind the input to the new IMEMode
}

// Function to handle the state of the Furigana checkbox
function handleFuriganaCheckboxChange() {
    const useFurigana = document.getElementById('useFurigana').checked;
    if (useFurigana) {
        bindIME(); // Bind to Hiragana when Furigana checkbox is checked
    } else {
        // Unbind the input if Furigana checkbox is unchecked
        wanakana.unbind(searchInput);
    }
}

