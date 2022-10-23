// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid project title'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid description'
            }
            return true
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid instructions'
            }
            return true

        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid usage statement'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid guidelines for contribution'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions:',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter valid test instructions'
            }
            return true
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["The MIT License", "Apache License", "The GPL License", "BSD 3", "N/A"],
        default: ''

    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (answer) => {
            if (answer === '') {
                return 'please provide a valid github username'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email:',
        validate: (answer) => {
            if (answer === '') {
                return 'please provide a valid email account example@example.com'
            }
            return true
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README has been succesfully created!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
