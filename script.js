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
            var furiganas = document.getElementsByClassName('furigana');
            for (let i = 0; i < furiganas.length; i++) {
                var rts = furiganas[i].getElementsByTagName('rt');
                for (let j = 0; j < rts.length; j++) {
                    rts[j].style.visibility = 'hidden'; // Set initial state
                }
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

function searchFunction() {
    // Your search function code here
}