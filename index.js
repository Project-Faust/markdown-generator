// TODO: Include packages needed for this application

// provides UI and question flow
const inquirer = require("inquirer");

// allows interaction with file system
const fs = require("fs");

// imports generateMarkdown js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your GitHub usermame?',
    name: 'github',
    },
    {type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },
    {type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    },
    {type: 'list',
    message: 'With which of the following licenses would you like to cover your project? (Use arrow keys to select).',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    default: 'MIT'
    },
];

// TODO: Create a function to write README file
function createReadme(fileName, data
) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw (error);
        console.log(`README file ${fileName} has been created.`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileName = "README.md";
            const data = generateMarkdown(answers);
            createReadme(fileName, data)
        })
};

// Function call to initialize app
init();
