import readline from "readline-sync";

console.log("Welcome to the guessing game!");
console.log("Try to guess a number between 1 and 100...");

const number = Math.floor(Math.random() * 100) + 1;
let guess; null;

while (guess !== number) {
    const userInput = readline.question("Enter your guess Number!: ");

    console.clear();

    guess = parseInt(userInput);
    console.log(`You guessed: ${guess}`);

    if (guess === number) {
        console.log("Congratulations! You got it right!");
    } else if (guess > number) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }

    console.log();
}

// class solution!