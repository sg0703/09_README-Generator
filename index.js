// TODO: Include packages needed for this application

/**  split up questions into functions, use when for questions that require multiple responses 
 * first set of questions are those that only require simple anwers/responses
 * the following need their own functions: 
 * 1. usage
 * 2. screen shots for usage
 * 3. installation
 * **/

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
        choices: ['MIT','Apache','GNU GPLv3'],
        name: 'license'
    },
    {
        type: 'input', 
        message: 'GitHub username: ',
        name: 'github_user'
    },
    {
        type: 'input', 
        message: 'GitHub repo link: ',
        name: 'github_link'
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
    var inquirer = require('inquirer');
    inquirer
      .prompt(questions)
      .then(answers => {
        console.log(answers);
      })
      .catch(error => {
        console.log('There was an error!');
        console.log(error);
      });
}

// Function call to initialize app
init();