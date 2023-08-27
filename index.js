//packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

//array of questions for input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What would you like your logo to say? Limit three characters.",
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "What color would you like your shape?",
    },
];
inquirer.prompt(questions).then(response => {
    if (response.shape === "circle"){
        const circle = new Circle()
        circle.setShapeColor(response.shapeColor)
        circle.setTextColor(response.textColor)
        circle.setText(response.text)
        fs.writeFile("./output/logo.svg", circle.render(), err => {
            console.log("Generated logo.svg")
        })
    }
    else if (response.shape === "square"){
        const square = new Square()
        square.setShapeColor(response.shapeColor)
        square.setTextColor(response.textColor)
        square.setText(response.text)
        fs.writeFile("./output/logo.svg", square.render(), err => {
            console.log("Generated logo.svg")
        })
    }
    else if (response.shape === "triangle"){
        const triangle = new Square()
        triangle.setShapeColor(response.shapeColor)
        triangle.setTextColor(response.textColor)
        triangle.setText(response.text)
        fs.writeFile("./output/logo.svg", triangle.render(), err => {
            console.log("Generated logo.svg")
        })
    }
})