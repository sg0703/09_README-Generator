// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project (motivation, why did you build it, what problem does it solve, what did you learn?)',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install the project?',
        name: 'install'
    },
    {
        type: 'input', 
        message: 'Describe how to use the app, and add screenshots (1-3) to assets/images using format screen1.png',
        name: 'usage_instructions'
    },
    {
        type: 'input', 
        message: 'What are the contribution guidelines for this app?',
        name: 'contrib'
    },
    {
        type: 'input', 
        message: 'How do you test the app?',
        name: 'test'
    },
    {
        type: 'list', 
        message: 'Which license are you using?',
        choices: ['MIT','Apache','GPL'],
        name: 'license'
    },
    {
        type: 'input', 
        message: 'GitHub username: ',
        name: 'github_user'
    },
    {
        type: 'input', 
        message: 'What is your email address for this project?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // uses generateMarkdown ex fileName, generateMarkdown()...
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
        // console.log(answers);
        console.log(markdown.generateMarkdown(answers));
      })
      .catch(error => {
        console.log('There was an error!');
        console.log(error);
      });
}

// Function call to initialize app
init();