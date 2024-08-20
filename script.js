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
    } else if (event.target.classList.contains('notes')) {
        let originalText = event.target.getAttribute('data-original-text');
        if (event.target.innerHTML === originalText) {
            event.target.innerText = 'Show notes';
        } else {
            event.target.innerHTML = originalText;
        }
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
                notes[i].setAttribute('data-original-text', notes[i].innerHTML);
                notes[i].innerText = 'Show notes';
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