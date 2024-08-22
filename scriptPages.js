// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sw.js')
//         .then(registration => {
//             console.log('Service worker registered:', registration);
//         })
//         .catch(error => {
//             console.error('Service worker registration failed:', error);
//         });
// }
// Initialize variables
let IMEMode = 'toHiragana'; // Default to Hiragana mode

const itemsPerPage = 25;
let currentPage = 1;
let data = [];
let filteredData = [];

window.onload = function () {
    loadContent()
        .then(setupPage)
        .catch(error => console.error('Error loading content:', error));

    initializeEventListeners();
};

function loadContent() {
    return fetch('content-min.json')
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData;
            filteredData = data; // Initialize filteredData with all data
            loadPage(currentPage);
        });
}

function getPageData(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageData = filteredData.slice(startIndex, endIndex);
    return pageData;
}




function loadPage(page) {
    const pageData = getPageData(page);
    const contentHTML = generateContentHTML(pageData);
    document.getElementById('container').innerHTML = contentHTML;
    updatePaginationControls(page);
    highlightFirstExerciseNumbers(); // Call this function to add the colouredNumber class
    initializeNotes(); // Call this function to set the initial state of the notes
}

function changePage(pageNumber) {
    currentPage = pageNumber;
    if (document.getElementById('search').value.trim() === '') {
        loadPage(currentPage); // Load normal pagination if no search term
    } else {
        searchFunction(); // Update search results for the current page
    }
}



function generateContentHTML(data) {
    // Use an array to collect HTML strings and join them later
    const htmlParts = [];

    data.forEach(item => {
        // Add the number div
        let numberHTML = `<div class="number" id="${item.id}">`;
        if (item.counter) numberHTML += `<span class="counter">${item.counter}</span>`;
        if (item.kanjiHeader) numberHTML += `<span class="kanjiHeader">${item.kanjiHeader}</span>`;
        numberHTML += `</div>\n`;

        // Add the exercise div
        let exerciseHTML = `<div class="exercise">\n`;
        if (item.kanjiHeader) {
            exerciseHTML += `<div class="sentence first elem_${item.kanjiHeader}">${item.exercise.sentence}</div>\n`;
        } else {
            exerciseHTML += `<div class="sentence">${item.exercise.sentence}</div>\n`;
        }
        if (item.exercise.translation) {
            exerciseHTML += `<div class="translation">${item.exercise.translation}</div>\n`;
        }

        // Add the notes div if notes exist
        if (item.exercise.notes && item.exercise.notes.length > 0) {
            exerciseHTML += `<div class="notes">\n`;
            item.exercise.notes.forEach(note => {
                note = note.replace(/「(.*?)」/g, '「<span class="grammarPointsNote">$1</span>」');
                exerciseHTML += `<div class="note">${note}</div>\n`;
            });
            exerciseHTML += `</div>\n`;
        }

        exerciseHTML += `</div>\n`; // End of exercise div

        // Append the constructed HTML parts to the array
        htmlParts.push(numberHTML + exerciseHTML);
    });

    // Join all parts together into a single string
    return htmlParts.join('');
}

function updatePaginationControls(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === page;
        button.addEventListener('click', () => changePage(i));
        paginationControls.appendChild(button);
    }
}

function setupPage() {
    highlightFirstExerciseNumbers();
    updateCounter();
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
    const totalMatches = filteredData.length; // Get the total number of matches
    document.getElementById('filteredNumber').innerText = totalMatches;
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

    document.getElementById('container').addEventListener('click', toggleVisibility);
    document.getElementById('useFurigana').addEventListener('change', handleCheckboxChange);
    document.getElementById('useTranslation').addEventListener('change', handleCheckboxChange);
    document.getElementById('search').addEventListener('input', debounceSearch);
    bindIME();
    // Initial call to set the initial state
    handleCheckboxChange();
}


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

    // 2. If the input value is composed only of space characters, reset filteredData and load the first page
    if (/^\s*$/.test(input)) {
        filteredData = data; // Show all exercises
        loadPage(1);
        return;
    }

    // Convert input into both Hiragana and Katakana for searching
    const filters = [input].map(word => {
        const convertedWord = replaceNumbers(word);
        return prepareTextForSearch(convertedWord);
    });

    // 4. Get the states of the checkboxes
    const useFurigana = document.getElementById('useFurigana').checked;
    const useKanji = document.getElementById('useKanji').checked;
    const useTranslation = document.getElementById('useTranslation').checked;

    // Initialize an empty array to hold filtered results
    filteredData = [];
    let matchCount = 0;

    // 5. Loop through all items in the data array to filter
    data.forEach(item => {
        const sentenceElement = document.createElement('div');
        sentenceElement.innerHTML = item.exercise.sentence;

        // Apply number replacement to sentence and translation
        const sentenceText = replaceNumbers(sentenceElement.textContent.toLowerCase());
        const translationText = replaceNumbers(item.exercise.translation.toLowerCase());
        let furiganaText = "";

        if (useFurigana) {
            const rts = sentenceElement.getElementsByTagName('rt');
            furiganaText = Array.from(rts).map(rt => replaceNumbers(rt.textContent.toLowerCase())).join(' ');
        }

        let shouldDisplay = false;

        // Check if none of the checkboxes are checked
        if (!useFurigana && !useKanji && !useTranslation) {
            const sentenceWithoutRt = sentenceElement.textContent; // Extract plain text without furigana
            const sentenceTextWithoutRt = replaceNumbers(sentenceWithoutRt.toLowerCase());

            filters.forEach(filter => {
                if (sentenceTextWithoutRt.includes(filter.hiragana) || sentenceTextWithoutRt.includes(filter.katakana)) {
                    shouldDisplay = true;
                }
            });
        } else {
            // Check for matches in the sentence, furigana, and translation
            filters.forEach(filter => {
                if (useKanji && (sentenceText.includes(filter.hiragana) || sentenceText.includes(filter.katakana))) {
                    debounceKanjiSearch();
                    shouldDisplay = true;
                }
                if (useFurigana && (furiganaText.includes(filter.hiragana) || furiganaText.includes(filter.katakana))) {
                    shouldDisplay = true;
                }
                if (useTranslation && translationText.includes(input.toLowerCase())) {
                    shouldDisplay = true;
                }
            });
        }

        // If this item should be displayed, add it to the filteredData array
        if (shouldDisplay) {
            filteredData.push(item);
            matchCount++;
        }
    });

    // Load the first page of filtered results
    loadPage(currentPage);

    // Update the counter to show the total number of matches
    updateCounter();

    // 5. Get all the 'exercise' elements, which contain the sentences
    const exercises = document.getElementsByClassName('exercise');

    // Initialize an empty array to hold elements that need highlighting
    let elementsToHighlight = [];

    // Loop through exercises on the current page and gather elements to highlight
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        const sentence = exercise.getElementsByClassName('sentence')[0];
        const translation = exercise.getElementsByClassName('translation')[0];

        // Skip if the elements are missing
        if (!sentence || !translation) continue;

        // Prepare the text for highlighting
        const sentenceText = replaceNumbers(sentence.textContent.toLowerCase());
        const translationText = replaceNumbers(translation.textContent.toLowerCase());
        let furiganaText = "";

        if (useFurigana) {
            const rts = sentence.getElementsByTagName('rt');
            for (let j = 0; j < rts.length; j++) {
                furiganaText += replaceNumbers(rts[j].textContent.toLowerCase());
            }
        }

        let highlightNeeded = false;

        if (!useFurigana && !useKanji && !useTranslation) {
            // Exclude content inside rt tags
            const sentenceWithoutRt = sentence.cloneNode(true);
            const rts = sentenceWithoutRt.getElementsByTagName('rt');
            while (rts.length > 0) {
                rts[0].parentNode.removeChild(rts[0]);
            }
            const sentenceTextWithoutRt = replaceNumbers(sentenceWithoutRt.textContent.toLowerCase());

            filters.forEach(filter => {
                if (sentenceTextWithoutRt.includes(filter.hiragana) || sentenceTextWithoutRt.includes(filter.katakana)) {
                    highlightNeeded = true;
                }
            });
        } else {
            // Check for matches in the sentence, furigana, and translation
            filters.forEach(filter => {
                if (useKanji && (sentenceText.includes(filter.hiragana) || sentenceText.includes(filter.katakana))) {
                    highlightNeeded = true;
                }
                if (useFurigana && (furiganaText.includes(filter.hiragana) || furiganaText.includes(filter.katakana))) {
                    highlightNeeded = true;
                }
                if (useTranslation && translationText.includes(input.toLowerCase())) {
                    highlightNeeded = true;
                }
            });
        }

        // Collect elements for highlighting
        if (highlightNeeded) {
            elementsToHighlight.push({ element: sentence, text: sentenceText });
            elementsToHighlight.push({ element: translation, text: translationText });
        }
    }

    // Determine which highlight function to use
    const highlightFunction = determineHighlightFunction(useFurigana, useKanji);

    // Highlight matching elements
    highlightFunction(elementsToHighlight, filters.flatMap(filter => [filter.hiragana, filter.katakana, input.toLowerCase()]));

    // Update the filteredNumber div to show how many results were found
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : '(•́︵•̀)';
}



// Determine which highlight function to use
function determineHighlightFunction(useFurigana, useKanji) {
    if (useFurigana && useKanji) {
        return highlightMatchesFuriganaKanji;
    } else {
        return highlightMatchesDefault;
    }
}

// Highlight function for default, useTranslation, and useKanji (without useFurigana)
function highlightMatchesDefault(elements, inputs) {
    const regex = new RegExp(`(${inputs.join('|')})`, 'gi');
    elements.forEach(({ element, text }) => {
        let html = element.getAttribute('data-original-content') || element.innerHTML;

        const newHTML = html.replace(regex, `<span class="highlight">$1</span>`);
        if (newHTML !== element.innerHTML) {
            element.innerHTML = newHTML;
        }
        if (!element.hasAttribute('data-original-content')) {
            element.setAttribute('data-original-content', html);
        }
    });
}

// Highlight function for useFurigana and useKanji
function highlightMatchesFuriganaKanji() {
    const userInput = document.getElementById('search').value;
    const kanji = userInput.charAt(0);
    const furigana = userInput.slice(1);
    const rubyElements = document.querySelectorAll('ruby');

    rubyElements.forEach(ruby => {
        const furiganaElement = ruby.querySelector('rt');
        if (furiganaElement) {
            const rubyFurigana = furiganaElement.textContent;
            if (ruby.childNodes[0].nodeType === 3 && ruby.childNodes[0].nodeValue.trim() === kanji && rubyFurigana === furigana) {
                ruby.classList.add('highlight');
            } else {
                ruby.classList.remove('highlight');
            }
        }
    });
}

// Efficiently create an index of Kanji by pronunciation
const kanjiIndex = readings.reduce((index, kanji) => {
    const pronunciations = kanji.ja_on.concat(kanji.ja_kun);
    pronunciations.forEach(pronunciation => {
        const hiragana = wanakana.toHiragana(pronunciation);
        if (!index[hiragana]) {
            index[hiragana] = [];
        }
        index[hiragana].push(kanji);
    });
    return index;
}, {});


function kanjiSearchFunction() {
    // Cache DOM elements and get the search input value
    const input = document.getElementById('search');
    const filter = wanakana.toHiragana(input.value.trim());

    // Look up the Kanji in the index and handle special cases
    const results = kanjiIndex[filter] ? [...kanjiIndex[filter]] : [];
    if (filter === 'まるばつ') {
        results.push({ literal: '〇' }, { literal: '×' });
    }

    // Get and clear the results container
    const container = document.getElementById('kanjiFoundContainer');
    container.innerHTML = '';

    // Create document fragments for efficient DOM insertion
    const fragment = document.createDocumentFragment();

    results.forEach(kanji => {
        const kanjiDiv = document.createElement('div');
        kanjiDiv.textContent = kanji.literal; // Display the matched Kanji
        kanjiDiv.classList.add('kanji'); // Add class for styling

        kanjiDiv.addEventListener('click', () => {
            input.value = ''; // Clear the search input
            input.value += kanjiDiv.textContent; // Append the Kanji to the search input
            debounceSearch(); // Trigger the search function
        });

        fragment.appendChild(kanjiDiv);
    });

    // Append all results to the container in one operation
    container.appendChild(fragment);
}



// Bind the input to the current IMEMode
function bindIME() {
    const searchInput = document.getElementById('search');
    wanakana.bind(searchInput, { IMEMode: IMEMode });
    isBound = true; // Update the variable when bound
}

// Unbind the input from the current IMEMode
function unbindIME() {
    const searchInput = document.getElementById('search');
    wanakana.unbind(searchInput);
    isBound = false; // Update the variable when unbound
}

// Function to toggle IMEMode between 'toHiragana' and 'toKatakana'
function toggleIMEMode() {
    IMEMode = IMEMode === 'toHiragana' ? 'toKatakana' : 'toHiragana';
    if (isBound) {
        bindIME(); // Re-bind the input to the new IMEMode
    }
}

// Function to handle the state of the checkboxes
function handleCheckboxChange() {
    const useFurigana = document.getElementById('useFurigana').checked;
    const useTranslation = document.getElementById('useTranslation').checked;

    if (!useTranslation) {
        if (!isBound) {
            bindIME(); // Bind to Hiragana when Translation checkbox is not checked
        }
    } else {
        if (isBound) {
            unbindIME(); // Unbind the input if Translation checkbox is checked
        }
    }
}

// Function to clear highlighting from an individual element
function clearElementHighlight(element) {
    if (element && element.hasAttribute('data-original-content')) {
        element.innerHTML = element.getAttribute('data-original-content');
        element.removeAttribute('data-original-content');
    }
}


// // Function to display all exercises and clear highlighting
// function displayAllExercises() {
//     const exercises = document.getElementsByClassName('exercise');
//     for (let i = 0; i < exercises.length; i++) {
//         exercises[i].style.display = "";
//         if (exercises[i].previousElementSibling) {
//             exercises[i].previousElementSibling.style.display = ""; // show the number
//         }
//         // Clear any existing highlights
//         clearElementHighlight(exercises[i].getElementsByClassName('sentence')[0]);
//         clearElementHighlight(exercises[i].getElementsByClassName('translation')[0]);
//     }
//     // Clear the filtered number display
//     document.getElementById('filteredNumber').innerText = exerciseTotalNumber;
// }



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


//END DO NOT TOUCH FUNCTIONS

