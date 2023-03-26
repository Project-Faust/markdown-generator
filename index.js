// TODO: Include packages needed for this application

// provides UI and question flow
const inquirer = require("inquirer");

// allows interaction with file system
const fs = require("fs");

//
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    },
    {type: 'input',
    message: 'With which of the following licenses would you like to cover your project?',
    name: 'license',
    },
    {type: 'input',
    message: 'What is your GitHub usermame?',
    name: 'github',
    },
    {type: 'input',
    message: 'What is your email address?',
    name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
