// test.js

var inquirer = require('inquirer');

var screenshots = [];


inquirer
  .prompt([
    {
        name: 'screenshot_confirm',
        type: 'confirm',
        message: 'Do you want to add a screenshot?'
    },
  ])
  .then(answers => {
    if (answers.screenshot_confirm) {
        addScreenshotPrompt();
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });    

function addScreenshotPrompt() {
    console.log('User wants to add a new screenshot!');
    
    inquirer.prompt([
        {
            name: 'screenshot',
            type: 'input',
            message: 'Enter screenshot filename: (root dir assets/images/'
        }
    ])
    .then(answers => {
        // screenshots.push(answers.screenshot);
        console.log('Added screenshot data (see below)');
        console.log(screenshots);

        inquirer.prompt([
            {
                name: 'screenshot_continue',
                type: 'confirm',
                message: 'Add another one?'
            }
        ])
        .then(answers => {
            if (answers.screenshot_continue) {
                addScreenshotPrompt();
            }
        });
    })


};


/**
 * 
 * .prompt([
        {
            name: 'screenshot_continue',
            type: 'confirm',
            message: 'Add another one?'
        }
    ])
    .then(answers => {
        if (answers.screenshot_continue) {
            addScreenshotPrompt();
        }
    });
 */