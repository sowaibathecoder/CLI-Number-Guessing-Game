#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const computerMove = randomNumber;
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
if (computerMove === randomNumber) {
    console.log("Computer pick :", computerMove);
}
if (answer.userGuessedNumber === randomNumber) {
    console.log("\nCongratulations! You guessed the right number.\n\nYOU WIN :) \n");
}
else {
    console.log("\nAWWW! You guessed the wrong number.\n\nYOU LOSE :( \n");
}
