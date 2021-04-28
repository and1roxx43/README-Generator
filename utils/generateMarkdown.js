// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'None') {
        return `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
    return ``;
}
    
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
      if(license !== 'None'){
        return `* [License](#license)`
      }
      return ``;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license !== 'None'){
        return (
            `# License\nThis project is licensed under the ${license} license
                `
        )
      }
      return ``;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions

If you have any question about this project, please contact me at ${data.email}.
You can see more of my repos at https://github.com/${data.github}/

${renderLicenseSection(data.license)}
  `;
  }
  
  module.exports = generateMarkdown;
  