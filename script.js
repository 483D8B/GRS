//START NOTES VISIBILITY
function toggleVisibility(event) {
    if (event.target.tagName === 'RUBY' || event.target.closest('ruby')) {
        handleRubyVisibility(event);
    } else if (event.target.classList.contains('close-note')) {
        handleCloseNoteVisibility(event);
    } else if (event.target.classList.contains('notes')) {
        handleNotesVisibility(event);
    }
}

function handleRubyVisibility(event) {
    const ruby = event.target.closest('ruby');
    const rts = ruby.getElementsByTagName('rt');
    for (const rt of rts) {
        rt.style.visibility = rt.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
}

function handleCloseNoteVisibility(event) {
    const note = event.target.closest('.notes');
    note.innerHTML = 'Show notes';
}

function handleNotesVisibility(event) {
    const note = event.target;
    const originalText = note.getAttribute('data-original-text');
    note.innerHTML = `${originalText} <span class="close-note">Close</span>`;
}

//END NOTES VISIBILITY




//START INIT
window.onload = function () {
    loadContent()
        .then(setupPage)
        .catch(error => console.error('Error loading content:', error));

    initializeEventListeners();
};

function loadContent() {
    return fetch('content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('container').innerHTML = data;
        });
}

function setupPage() {
    highlightFirstExerciseNumbers();
    updateCounter();
    initializeNotes();
    setInitialFuriganaState();
}

function highlightFirstExerciseNumbers() {
    const exercises = document.querySelectorAll('.exercise .sentence.first');
    for (const exercise of exercises) {
        const numberDiv = exercise.parentElement.previousElementSibling;
        numberDiv.classList.add('colouredNumber');
    }
}

let exerciseTotalNumber = null;
function updateCounter() {
    const numbers = document.querySelectorAll('#container .number');
    const lastNumber = numbers[numbers.length - 1];
    exerciseTotalNumber = lastNumber ? lastNumber.id : null; // Store the ID globally
    const counterDiv = document.getElementById('counter');
    counterDiv.innerHTML = `${lastNumber.id} <i class="fa-solid fa-language"></i>`;
    document.getElementById('filteredNumber').innerText = exerciseTotalNumber;
}

function initializeNotes() {
    const notes = document.getElementsByClassName('notes');
    for (const note of notes) {
        const originalText = note.innerHTML;
        note.setAttribute('data-original-text', originalText);
        note.innerHTML = 'Show notes';
    }
}

function setInitialFuriganaState() {
    const furiganas = document.getElementsByClassName('sentence');
    for (const furigana of furiganas) {
        const rts = furigana.getElementsByTagName('rt');
        for (const rt of rts) {
            rt.style.visibility = 'hidden'; // Set initial state
        }
    }
}

function initializeEventListeners() {
    document.getElementById('container').addEventListener('click', toggleVisibility);
    document.getElementById('useFurigana').addEventListener('change', handleFuriganaCheckboxChange);
    document.getElementById('search').addEventListener('input', debounceSearch);
    debounceKanjiSearch
    bindIME();
}

document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    // Check if the body has the 'dark-mode' class
    if (document.body.classList.contains('dark-mode')) {
        // If it does, change the button text to 'Light Mode'
        this.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    } else {
        // If it doesn't, change the button text back to 'Dark Mode'
        this.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    }
});

//END INIT



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

// Function to replace numbers with their Kanji or Western equivalents
function replaceNumbers(text) {
    let result = text;

    // Replace Western numbers with Kanji
    Object.keys(numberMapping).forEach(western => {
        const kanji = numberMapping[western];
        result = result.replace(new RegExp(`\\b${western}\\b`, 'g'), kanji);
    });

    // Replace Kanji with Western numbers
    Object.keys(reverseNumberMapping).forEach(kanji => {
        const western = reverseNumberMapping[kanji];
        result = result.replace(new RegExp(`\\b${kanji}\\b`, 'g'), western);
    });

    return result;
}

// Ensure that all variations of numbers are considered for matching
function prepareTextForSearch(text) {
    const convertedText = replaceNumbers(text);
    return {
        original: convertedText,
        hiragana: wanakana.toHiragana(convertedText),
        katakana: wanakana.toKatakana(convertedText)
    };
}


// Debounce timer variable to avoid too many search function calls
let debounceTimer;

function debounceSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchFunction, 300); // Adjust the delay as needed
}

function debounceKanjiSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(kanjiSearchFunction, 300); // Adjust the delay as needed
}




function searchFunction() {
    // 1. Get the search input value and trim any surrounding whitespace
    const input = document.getElementById('search').value.trim();

    // 2. If the input value is composed only of space characters, display all exercises and return
    if (/^\s*$/.test(input)) {
        displayAllExercises();
        return;
    }

    // Convert input into both Hiragana and Katakana for searching
    const filters = [input].map(word => {
        const convertedWord = replaceNumbers(word);

        return IMEMode === 'toHiragana'
            ? prepareTextForSearch(convertedWord)
            : prepareTextForSearch(convertedWord);
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

        // Apply number replacement to sentence and translation
        const sentenceText = replaceNumbers(sentence.textContent.toLowerCase());
        const translationText = replaceNumbers(translation.textContent.toLowerCase());
        let furiganaText = "";

        if (useFurigana) {
            const rts = sentence.getElementsByTagName('rt');
            for (let j = 0; j < rts.length; j++) {
                furiganaText += replaceNumbers(rts[j].textContent.toLowerCase());
            }
        }

        let shouldDisplay = false;
        let highlightNeeded = false;

        // Check if none of the checkboxes are checked
        if (!useFurigana && !useKanji && !useTranslation) {
            // Exclude content inside rt tags
            const sentenceWithoutRt = sentence.cloneNode(true);
            const rts = sentenceWithoutRt.getElementsByTagName('rt');
            while (rts.length > 0) {
                rts[0].parentNode.removeChild(rts[0]);
            }
            const sentenceTextWithoutRt = replaceNumbers(sentenceWithoutRt.textContent.toLowerCase());

            // Check for matches in the sentence excluding rt content
            for (const filter of filters) {
                if (sentenceTextWithoutRt.includes(filter.hiragana) || sentenceTextWithoutRt.includes(filter.katakana)) {
                    highlightNeeded = true;
                    shouldDisplay = true;
                }
            }
        } else {
            // Check for matches in the sentence, furigana, and translation
            for (const filter of filters) {
                if (useKanji && (sentenceText.includes(filter.hiragana) || sentenceText.includes(filter.katakana))) {
                    debounceKanjiSearch();
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
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : '(•́︵•̀)';
}



function kanjiSearchFunction() {
    // Get the input value
    var input = document.getElementById('search');
    var filter = wanakana.toHiragana(input.value);


    // Look up the Kanji in the index
    var results = kanjiIndex[filter] || [];

    // If the filter is "まるばつ", add 〇 × to the results
    if (filter === 'まるばつ') {
        results.push({ literal: '〇' });
        results.push({ literal: '×' });
    }

    // Get the results container
    var container = document.getElementById('kanjiFoundContainer');

    // Clear the container
    container.innerHTML = '';

    // Add the results to the container
    for (var i = 0; i < results.length; i++) {
        var kanjiDiv = document.createElement('div');
        kanjiDiv.textContent = results[i].literal; // Display the matched Kanji
        kanjiDiv.classList.add('kanji'); // Add class for styling
        kanjiDiv.onclick = function () {
            var searchInput = document.getElementById('search');
            input.value = '';
            searchInput.value += this.textContent; // Set input value to Kanji
            // Trigger the search function after setting the value
            debounceSearch();
        };
        container.appendChild(kanjiDiv);
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





//START DO NOT TOUCH FUNCTIONS


// Create an index of Kanji by pronunciation
var kanjiIndex = {};
for (var i = 0; i < readings.length; i++) {
    var kanji = readings[i];
    kanji.ja_on.concat(kanji.ja_kun).forEach(pronunciation => {
        var hiragana = wanakana.toHiragana(pronunciation);
        if (!kanjiIndex[hiragana]) {
            kanjiIndex[hiragana] = [];
        }
        kanjiIndex[hiragana].push(kanji);
    });
}



// Function to highlight matched text
function highlightMatches(elements, inputs) {
    elements.forEach(({ element, text }) => {
        // Use a copy of the original HTML content
        let html = element.getAttribute('data-original-content') || element.innerHTML;

        // Create a regex to match all input patterns (Kanji and Western numbers)
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
    document.getElementById('filteredNumber').innerText = exerciseTotalNumber;
}


// Function to clear highlighting from an individual element
function clearElementHighlight(element) {
    if (element && element.hasAttribute('data-original-content')) {
        element.innerHTML = element.getAttribute('data-original-content');
        element.removeAttribute('data-original-content');
    }
}

//END DO NOT TOUCH FUNCTIONS

