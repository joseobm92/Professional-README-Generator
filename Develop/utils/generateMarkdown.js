// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
     switch (license) {
      case 'The MIT License':
          return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';

          case 'Apache License':
              return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';

              case 'The GPL License':
          return '[The GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)';

          case 'BSD 3':
          return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

          case 'N/A':
              return '';

      default:
          break;
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'Apache License':
      return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'The GPL License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    case 'N/A':
      return '';

    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}
  # ${data.projectTitle}
 
  * [Installation](#installation)
  * [Description](#description)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Instructions](#instructions)
  * [License](#license)
      
  ## Installation
  ${data.installation}
  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Instructions
  ${data.test}
  ## License
  This project is licensed under the ${renderLicenseLink(data.license)}
      
  ## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})
  
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [ ${data.github}](https://github.com/${data.github}). All rights reserved.
  
  Licensed under the ${data.license} license.`;

}

module.exports = generateMarkdown;
