'#!/usr/bin/env node';
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "Sentence",
        message: "Write the sentence to count words",
        type: "input"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log("No of words in your sentence is:", words.length);
