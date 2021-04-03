// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green';
      break;
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue';
      break;
    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-blue';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      break;
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Copyright (c) Sam Gates. All rights reserved. 
  Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License badge](${renderLicenseBadge(data.license)})
  
  ## Description

  ${data.description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage_instructions}
  
  ![Screenshot 1](assets/images/screenshot1.png)
  ![Screenshot 2](assets/images/screenshot2.png)
  ![Screenshot 3](assets/images/screenshot3.png)
  
  ## How to Contribute

  ${data.contrib}
  
  ## Test

  ${data.test}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  [${data.github_user} GitHub Profile](https://github.com/${data.github_user})
  
  Email with questions! You can reach me at ${data.email}
  `;
}

module.exports = {generateMarkdown};