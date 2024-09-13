#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magentaBright("\n\t\t\t\t *****NUMBER GUESSING GAME***** \t\t\t\t\n"));

  const randomNumber = Math.floor(Math.random() * 10 + 1);
  const computerMove = randomNumber;

  const answer = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: chalk.yellowBright("Please guess a number between 1-10:"),
    }
  ]);

  if (answer.userGuessedNumber <= 0 || answer.userGuessedNumber > 10) {
    console.log(chalk.red("\n  NOTE: You just select number between 1-10 :|."));
  }

  if (computerMove === randomNumber) {
    console.log(chalk.yellowBright("\nComputer pick :", chalk.cyan(computerMove)));
  }

  if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow("\nCongratulations! You guessed the right number.")); 
    console.log(chalk.green("\n\ YOU WIN :) \n"));
  }
  else {
    console.log(chalk.yellow("\nAWWW! You guessed the wrong number.")); 
    console.log(chalk.red("\n\ YOU LOSE :( \n"));
  }
