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
    document.getElementById('search').addEventListener('input', searchFunction);
}



function searchFunction() {
    var input = document.getElementById('search').value.toLowerCase();
    var useFurigana = document.getElementById('useFurigana').checked;
    var useKanji = document.getElementById('useKanji').checked;
    var useTranslation = document.getElementById('useTranslation').checked;

    var exercises = document.getElementsByClassName('exercise');

    for (let i = 0; i < exercises.length; i++) {
        var sentence = exercises[i].getElementsByClassName('sentence')[0];
        var translation = exercises[i].getElementsByClassName('translation')[0];

        var sentenceText = sentence ? sentence.textContent.toLowerCase() : "";
        var translationText = translation ? translation.textContent.toLowerCase() : "";

        var furiganaText = "";
        if (useFurigana) {
            var rts = sentence.getElementsByTagName('rt');
            for (let j = 0; j < rts.length; j++) {
                furiganaText += rts[j].textContent.toLowerCase();
            }
        }

        var showExercise = false;

        if (useKanji && sentenceText.includes(input)) {
            showExercise = true;
        }

        if (useFurigana && furiganaText.includes(input)) {
            showExercise = true;
        }

        if (useTranslation && translationText.includes(input)) {
            showExercise = true;
        }

        if (showExercise) {
            exercises[i].style.display = "";
            exercises[i].previousElementSibling.style.display = "";
        } else {
            exercises[i].style.display = "none";
            exercises[i].previousElementSibling.style.display = "none";
        }
    }

    // Update the filteredNumber to show how many results were found
    var filteredExercises = document.querySelectorAll('.exercise:not([style*="display: none"])');
    document.getElementById('filteredNumber').innerText = filteredExercises.length ? filteredExercises.length : 'No matches found';
}
