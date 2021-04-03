// Import inquirer, generateMarkdown and FS modules
var inquirer = require('inquirer');
var markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Define list of questions to ask user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project (motivation, why did you build it, what problem does it solve, what did you learn?)',
        name: 'description',
        default: 'Project Description'
    },
    {
        type: 'input',
        message: 'How do you install the project?',
        name: 'install',
        default: 'Installation Instructions'
    },
    {
        type: 'input', 
        message: 'Describe how to use the app, then upload screenshots (assets/images/screen[1-3].png)',
        name: 'usage_instructions',
        default: 'Usage Instructions'
    },
    {
        type: 'input', 
        message: 'What are the contribution guidelines for this app?',
        name: 'contrib',
        default: 'How to contribute'
    },
    {
        type: 'input', 
        message: 'How do you test the app?',
        name: 'test',
        default: 'How to test'
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
        name: 'github_user',
        default: 'sg0703'
    },
    {
        type: 'input', 
        message: 'What is your email address for this project?',
        name: 'email',
        default: 'sam.j.gates@gmail.com'
    }
];

// Writes README file using markdown module
function writeToFile(fileName, data) {
    // uses generateMarkdown ex fileName, generateMarkdown()...
    fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Wrote README.md!')
    );
}

// Gather user input, then call writeToFile to generate README
function init() {
    console.log('Welcome to the README Generator! Answer the following prompts, and a file named README.md will be generated in the same director as index.js. Make sure you have backed up previous README files. Refer to the README for this project for more information.');

    inquirer
      .prompt(questions)
      .then(answers => {
        writeToFile('README.md',answers);
      })
      .catch(error => {
        console.log('There was an error!');
        console.log(error);
      });
}

// Promps user input at runtime
init();