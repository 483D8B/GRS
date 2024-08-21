let exerciseTotalNumber = null;

function updateCounter(matchCount) {
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : '(•́︵•̀)';
}

function setupPage() {
    updateCounter(0);
    initializeNotes();
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('search').addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();

                // Check if the input is empty or contains only whitespace
                if (/^\s*$/.test(searchTerm)) {
                    document.getElementById('container').innerHTML = '';
                    updateCounter(0);
                    return;
                }

                const useFurigana = document.getElementById('useFurigana').checked;
                const useKanji = document.getElementById('useKanji').checked;
                const useTranslation = document.getElementById('useTranslation').checked;

                const filteredData = data.filter(item => {
                    const sentence = item.exercise.sentence.toLowerCase();
                    const translation = item.exercise.translation.toLowerCase();
                    const kanjiHeader = item.kanjiHeader ? item.kanjiHeader.toLowerCase() : '';

                    if (useFurigana && sentence.includes(searchTerm)) {
                        return true;
                    }
                    if (useKanji && kanjiHeader.includes(searchTerm)) {
                        return true;
                    }
                    if (useTranslation && translation.includes(searchTerm)) {
                        return true;
                    }
                    return false;
                });

                displayResults(filteredData);
                updateCounter(filteredData.length);
                initializeNotes();
            });

            function displayResults(results) {
                const htmlParts = [];

                results.forEach(item => {
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
                document.getElementById('container').innerHTML = htmlParts.join('');
            }

            setupPage();
            initializeEventListeners();
        })
        .catch(error => console.error('Error fetching data:', error));
});

function initializeEventListeners() {
    document.getElementById('container').addEventListener('click', toggleVisibility);
    document.getElementById('useFurigana').addEventListener('change', handleCheckboxChange);
    document.getElementById('useTranslation').addEventListener('change', handleCheckboxChange);
    document.getElementById('search').addEventListener('input', debounceSearch);
    bindIME();
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

// Initial call to set the initial state
handleCheckboxChange();

// Debounce timer variable to avoid too many search function calls
let debounceTimer;

function debounceSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchFunction, 300); // Adjust the delay as needed
}

// Initialize variables
let IMEMode = 'toHiragana'; // Default to Hiragana mode
const searchInput = document.getElementById('search');
let isBound = false; // Variable to keep track of whether the input is bound

// Bind the input to the current IMEMode
function bindIME() {
    wanakana.bind(searchInput, { IMEMode: IMEMode });
    isBound = true; // Update the variable when bound
}

// Unbind the input from the current IMEMode
function unbindIME() {
    wanakana.unbind(searchInput);
    isBound = false; // Update the variable when unbound
}

// Do not touch this
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

// START NOTES VISIBILITY
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

function initializeNotes() {
    const notes = document.getElementsByClassName('notes');
    for (const note of notes) {
        const originalText = note.innerHTML;
        note.setAttribute('data-original-text', originalText);
        note.innerHTML = 'Show notes';
    }
}
// END NOTES VISIBILITY