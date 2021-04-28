// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are contributing to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('myREADME.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
