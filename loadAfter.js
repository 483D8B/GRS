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
            });

            function displayResults(results) {
                const container = document.getElementById('container');
                container.innerHTML = '';

                results.forEach(item => {
                    const exerciseDiv = document.createElement('div');
                    exerciseDiv.innerHTML = `
                        <h3>${item.counter}</h3>
                        <p>${item.exercise.sentence}</p>
                        <p>${item.exercise.translation}</p>
                    `;
                    container.appendChild(exerciseDiv);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});