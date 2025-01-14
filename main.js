"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.Sentence.trim().split(" ");
// Trim means to remove the whitespace from the beginning and last so that we couldnt count the space.
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
