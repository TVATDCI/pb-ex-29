import readline from "readline-sync";

// Generating a random number between 1 and 100
function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
// The guessing game!
function guessingGame() {
    const randomNumber = getRandomNumber(1, 100);
    let guessesLeft = 10;

    console.log("Welcome to the guessing game!");
    console.log("Try to guess a number between 1 and 100...");
    console.log("You have 10 guesses to get it right!");

    while (guessesLeft > 0) {
        const guess = parseInt(readline.question("Enter your guess: "));

        if (guess === randomNumber) {
            console.log("Congratulations! You got it right!");
            break;
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Too low! Try again.");
        }

        guessesLeft--;
        console.log(`You have ${guessesLeft} guesses left.`);
    }
    if (guessesLeft === 0) {
        console.log(`Sorry, you're out of guesses! The number was ${randomNumber}.`);
    }
    const playAgain = readline.question("Do you want to play again? (yes/no) ");
    if (playAgain === "yes") {
        guessingGame();
    } else {
        console.log("Thanks for playing!");
    }
}

guessingGame();