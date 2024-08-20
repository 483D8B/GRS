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

function updateCounter() {
    const numbers = document.querySelectorAll('#container .number');
    const lastNumber = numbers[numbers.length - 1];
    const counterDiv = document.getElementById('counter');
    counterDiv.innerHTML = `${lastNumber.id} <i class="fa-solid fa-language"></i>`;
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
    const input = document.getElementById('search').value.trim();
    if (/^\s*$/.test(input)) {
        displayAllExercises();
        return;
    }

    const filters = createFilters(input);
    const { useFurigana, useKanji, useTranslation } = getCheckboxStates();
    const exercises = document.getElementsByClassName('exercise');

    const { elementsToHighlight, matchCount } = processExercises(exercises, filters, useFurigana, useKanji, useTranslation);
    highlightMatches(elementsToHighlight, filters.flatMap(filter => [filter.hiragana, filter.katakana]));
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : 'No matches found';
}

function createFilters(input) {
    return [input].map(word => ({
        hiragana: wanakana.toHiragana(word),
        katakana: wanakana.toKatakana(word)
    }));
}

function getCheckboxStates() {
    return {
        useFurigana: document.getElementById('useFurigana').checked,
        useKanji: document.getElementById('useKanji').checked,
        useTranslation: document.getElementById('useTranslation').checked
    };
}

function processExercises(exercises, filters, useFurigana, useKanji, useTranslation) {
    let elementsToHighlight = [];
    let matchCount = 0;

    for (const exercise of exercises) {
        const sentence = exercise.getElementsByClassName('sentence')[0];
        const translation = exercise.getElementsByClassName('translation')[0];
        if (!sentence || !translation) continue;

        const { sentenceText, translationText, furiganaText } = extractTexts(sentence, useFurigana);

        let shouldDisplay = false;
        let highlightNeeded = false;

        for (const filter of filters) {
            if (useKanji && (sentenceText.includes(filter.hiragana) || sentenceText.includes(filter.katakana))) {
                highlightNeeded = true;
                shouldDisplay = true;
                kanjiSearchFunction();
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

        exercise.style.display = shouldDisplay ? "" : "none";
        exercise.previousElementSibling.style.display = shouldDisplay ? "" : "none";

        if (highlightNeeded) {
            elementsToHighlight.push({ element: sentence, text: sentenceText });
            elementsToHighlight.push({ element: translation, text: translationText });
            matchCount++;
        }
    }

    return { elementsToHighlight, matchCount };
}

function extractTexts(sentence, useFurigana) {
    const sentenceText = sentence.textContent.toLowerCase();
    const translationText = sentence.parentElement.querySelector('.translation').textContent.toLowerCase();
    let furiganaText = "";

    if (useFurigana) {
        const rts = sentence.getElementsByTagName('rt');
        for (const rt of rts) {
            furiganaText += rt.textContent.toLowerCase();
        }
    }

    return { sentenceText, translationText, furiganaText };
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

// Function to highlight the clicked Kanji
function highlightKanji() {
    const kanjiElements = document.querySelectorAll('#kanjiFoundContainer .kanji');
    kanjiElements.forEach(el => el.classList.remove('highlight-kanji'));
    this.classList.add('highlight-kanji');
    highlightedKanji = this.textContent;
    searchFunction(); // Trigger search function to filter exercises
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


function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

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


var kanjiSearchFunction = debounce(function () {
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
            searchInput.value += this.textContent + ' '; // Set input value to Kanji
            input.value = '';
            searchInput.dispatchEvent(new Event('keyup')); // Manually trigger the keyup event
            input.dispatchEvent(new Event('keyup'));

        };
        kanjiDiv.classList.add('kanji'); // Add class for styling
        kanjiDiv.onclick = highlightKanji; // Add click handler to highlight Kanji
        container.appendChild(kanjiDiv);
    }
}, 300); // 300 milliseconds debounce time

