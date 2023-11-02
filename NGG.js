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
    // start the actual game (function does not enable it)

function checkGuess() {
    var userGuess = parseInt(document.getElementById('userGuess').value);
    var messageElement = document.getElementById('message');
    var attemptsElement = document.getElementById('attempts');
    var guessMessageElement = document.getElementById('guessMessage'); 
    // Get the guess message span element
    // check the guess

    attempts++;
    // increase the number of attempts

    if (userGuess < 1 || userGuess > 25) {
        messageElement.textContent = 'Please enter a valid number between 1 and 25.';
        // makes sure the user stays within the valid values
        guessMessageElement.style.color = 'black'; 
        // Set color to black for invalid input
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
        // message if the guess is too low
        guessMessageElement.style.color = 'red'; 
        // Set color to red for incorrect guess
        guessMessageElement.textContent = 'Incorrect! Try again.'
        // Displays incorrect guess
    } else if (userGuess > randomNumber) {
        messageElement.textContent = 'Too high! Try again.';
        // message if the guess is too high
        guessMessageElement.style.color = 'red'; 
        // Set color to red for incorrect guess
        guessMessageElement.textContent = 'Incorrect! Try again.'
    } else {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
         // message if you guess correctly
         guessMessageElement.style.color = 'green'; 
         // Set color to green for correct guess
         guessMessageElement.textContent = 'Correct!'
    }

    attemptsElement.textContent = 'Attempts: ' + attempts;
}
// display the number of attempts


// Added a event listener for the button click and to start the game when the page loads
document.getElementById("submitButton").addEventListener("click", checkGuess);
window.onload = startGame;
