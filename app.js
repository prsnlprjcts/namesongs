// document.addEventListener('DOMContentLoaded', function () {
//     const inputField = document.getElementById('songs__name');
//     const table = document.getElementById('table__songs');

//     inputField.addEventListener('input', function () {
//         const inputValue = inputField.value;

//         if (inputValue.toLowerCase() === "evermore" || inputValue.toLowerCase() === "willow" || inputValue.toLowerCase() === "champagne problems" || inputValue.toLowerCase() === "gold rush" || inputValue.toLowerCase() === "tis the damn season" || inputValue.toLowerCase() === "tolerate it" || inputValue.toLowerCase() === "no bady no crime" || inputValue.toLowerCase() === "happiness" || inputValue.toLowerCase() === "dorothea" || inputValue.toLowerCase() === "coney island" || inputValue.toLowerCase() === "ivy" || inputValue.toLowerCase() === "cowbot like me" || inputValue.toLowerCase() === "long story short" || inputValue.toLowerCase() === "marjorie" || inputValue.toLowerCase() === "closure") {

//             const row = table.insertRow(0);
//             const cell = row.insertCell(0);

//             cell.textContent = inputValue;
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('songs__name');
    const table = document.getElementById('table__songs');
    const resultElement = document.getElementById('result');

    let correctAnswers = 0;
    let enteredSongs = [];
    const totalSongs = 15;

    inputField.addEventListener('input', function () {
        const inputValue = inputField.value;

        if (isCorrectSong(inputValue) && !enteredSongs.includes(inputValue.toLowerCase())) {
            const row = table.insertRow(0);
            const cell = row.insertCell(0);
            cell.textContent = inputValue;

            correctAnswers++;
            enteredSongs.push(inputValue.toLowerCase());
            inputField.value = "";
        }

        updateResult();
    });

    function isCorrectSong(songName) {
        const validSongs = [
            "evermore", "willow", "champagne problems", "gold rush", "tis the damn season",
            "tolerate it", "no body no crime", "happiness", "dorothea", "coney island",
            "ivy", "cowboy like me", "long story short", "marjorie", "closure"
        ];

        return validSongs.includes(songName.toLowerCase());
    }

    function updateResult() {
        resultElement.textContent = `Correct Answers: ${correctAnswers}/${totalSongs}`;
    }
});