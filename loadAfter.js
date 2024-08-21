let exerciseTotalNumber = null;

function updateCounter(matchCount) {
    document.getElementById('filteredNumber').innerText = matchCount ? matchCount : '(•́︵•̀)';
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('search').addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();
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
        })
        .catch(error => console.error('Error fetching data:', error));

});