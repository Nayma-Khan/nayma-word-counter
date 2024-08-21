#! /usr/bin/env Node
import inquirer from "inquirer";

const answers: {

    Sentence: string

}  = await inquirer.prompt([
    
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "

   }

])

const words = answers.Sentence.trim().split(" ")
// Trim means to remove the whitespace from the beginning and last so that we couldnt count the space.

console.log(words);

console.log(`Your sentence word count is ${words.length}`);

