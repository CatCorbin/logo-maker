//packages required for this application
const inquirer = require("inquirer");

//array of questions for input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What would you like your logo to say? Limit three characters.",
    },
    {
        type: "input",
        name: "text-color",
        message: "What color would you like your text to be?",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo?",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "What color would you like your shape?",
    },
];