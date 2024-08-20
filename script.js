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


    // Attach the searchFunction to the input field
    let debounceTimer;
    document.getElementById('search').addEventListener('input', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(searchFunction, 300); // Adjust the delay as needed
    });

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


function searchFunction() {
    // 1. Get the search input value and convert it to lowercase
    var input = document.getElementById('search').value.toLowerCase();

    // 2. Convert input into potential Kanji if it's a number, and vice versa
    let inputsToCheck = [input];

    // If input is a number, add its Kanji equivalent to the list
    if (numberMapping[input]) {
        inputsToCheck.push(numberMapping[input]);
    }

    // If input is a Kanji, add its Western number equivalent to the list
    if (reverseNumberMapping[input]) {
        inputsToCheck.push(reverseNumberMapping[input]);
    }

    // 3. Get the states of the checkboxes
    var useFurigana = document.getElementById('useFurigana').checked;
    var useKanji = document.getElementById('useKanji').checked;
    var useTranslation = document.getElementById('useTranslation').checked;

    // 4. Get all the 'exercise' elements, which contain the sentences
    var exercises = document.getElementsByClassName('exercise');

    // Array to keep track of which exercises should be displayed
    let results = [];

    // 5. Loop through all 'exercise' elements
    for (let i = 0; i < exercises.length; i++) {
        // Get the sentence element inside the current exercise
        var sentence = exercises[i].getElementsByClassName('sentence')[0];
        // Get the translation element inside the current exercise
        var translation = exercises[i].getElementsByClassName('translation')[0];

        // Extract text content from the sentence and translation, and convert to lowercase
        var sentenceText = sentence ? sentence.textContent.toLowerCase() : "";
        var translationText = translation ? translation.textContent.toLowerCase() : "";

        // 6. Initialize an empty string to hold Furigana text if needed
        var furiganaText = "";
        if (useFurigana) {
            // If the Furigana checkbox is checked, collect all Furigana (rt) text
            var rts = sentence.getElementsByTagName('rt');
            for (let j = 0; j < rts.length; j++) {
                furiganaText += rts[j].textContent.toLowerCase();
            }
        }

        // 7. Determine whether the current exercise should be displayed
        var showExercise = false;


        // Check against all inputs (original, Kanji, and Western equivalents)
        for (let j = 0; j < inputsToCheck.length; j++) {
            let currentInput = inputsToCheck[j];

            // Check if the Kanji checkbox is checked and if the sentence text contains the input
            if (useKanji && sentenceText.includes(currentInput)) {
                showExercise = true;
            }

            // Check if the Furigana checkbox is checked and if the Furigana text contains the input
            if (useFurigana && furiganaText.includes(currentInput)) {
                showExercise = true;
            }

            // Check if the Translation checkbox is checked and if the translation text contains the input
            if (useTranslation && translationText.includes(currentInput)) {
                showExercise = true;
            }

            if (showExercise) break; // No need to check further if a match is found
        }

        // If the exercise matches the search criteria, add it to the results array
        if (showExercise) {
            results.push(i);
        }
    }

    // 8. Batch update the DOM to show or hide exercises based on the search results
    for (let i = 0; i < exercises.length; i++) {
        if (results.includes(i)) {
            exercises[i].style.display = ""; // Show the exercise
            exercises[i].previousElementSibling.style.display = ""; // Also show the corresponding number
        } else {
            exercises[i].style.display = "none"; // Hide the exercise
            exercises[i].previousElementSibling.style.display = "none"; // Also hide the corresponding number
        }
    }

    // 9. Update the filteredNumber div to show how many results were found
    document.getElementById('filteredNumber').innerText = results.length ? results.length : 'No matches found';
}