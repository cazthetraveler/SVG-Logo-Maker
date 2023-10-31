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
    ]).then((data) => createSVG(JSON.stringify(data)));
};

const fileName = "logo.svg";

function createSVG(data) {
    const pData = JSON.parse(data);
    fs.writeFile(fileName, generateLogo(pData), (err) => err ? console.error(err) : console.log("All good."))
};

function generateLogo(pData) {
    checkShapeColor(pData);
    checkTextLength(pData);
    checkTextColor(pData);
    // renderShape(pData);
    switch (pData.shape) {
        case "Circle":
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${pData.shapecolor}" />
    <text x="50%" y="55%" font-size="60" text-anchor="middle" fill="${pData.textcolor}">${pData.text}</text>
</svg>`;
        case "Triangle":
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${pData.shapecolor}" />
    <text x="50%" y="65%" font-size="50" text-anchor="middle" fill="${pData.textcolor}">${pData.text}</text>
</svg>`;
        case "Square":
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" fill="${pData.shapecolor}" />
    <text x="25%" y="45%" text-anchor="middle" font-size="60" fill="${pData.textcolor}">${pData.text}</text>
</svg>`;
    };
};


function checkShapeColor(pData) {
    if (pData.shapecolor.match(/#[A-Fa-f0-9]+/g) && pData.shapecolor.length === 7) {
    } else {
        throw new Error("SHAPE color needs to be in hexadecimal form, ex: #123ABC");
    };
};

function checkTextLength(pData) {
    if (pData.text.length <= 3) {
    } else {
        throw new Error("Text needs to be at least 3 characters or less.");
    };
};

function checkTextColor(pData) {
    if (pData.textcolor.match(/#[A-Fa-f0-9]+/g) && pData.textcolor.length === 7) {
    } else {
        throw new Error("TEXT color needs to be in hexadecimal form, ex: #123ABC");
    };
};

init();