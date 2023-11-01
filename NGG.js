var attempts = 0;
var randomNumber;

function startGame() {
    // Generate a new random number between 1 and 25
    randomNumber = Math.floor((Math.random() * 24)) + 1;
    attempts = 0;
    document.getElementById('mesasge').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: ' + attempts;
}
startGame();
function checkGuess() {
    var userGuess = parseInt(document.getElementById('userGuess').value);
    var messageElement = document.getElementById('message');
    var attemptsElement = document.getElementById('attempts');

    attempts++;

    if (userGuess < 1 || userGuess > 25) {
        messageElement.textContent = 'Please enter a valid number between 1 and 25.';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        messageElement.textContent = 'Too high! Try again.';
    } else {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
    }

    attemptsElement.textContent = 'Attempts: ' + attempts;
}



// Add an event listener for the button click and start the game when the page loads
document.getElementById("submitButton").addEventListener("click", checkGuess);
window.onload = startGame;
