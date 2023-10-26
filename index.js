const inquirer = require("inquirer");
const fs = require("fs");


function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter a maximum of 3 characters.",
            name: "text",
        },
        {
            type: "input",
            message: "Enter a hexadecimal for TEXT color.",
            name: "textcolor",
        },
        {
            type: "list",
            message: "Choose a shape.",
            choices: ["Circle", "Triangle", "Square"],
            name: "shape",
        },
        {
            type: "input",
            message: "Enter a hexadecimal for SHAPE color.",
            name: "shapecolor",
        },
    ]).then((data) => createSVG(data));
};

function createSVG(data) {
    fs.writeFile("logo.svg", )
}

init();