// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${ data.title }

  ![badge](https://img.shields.io/badge/License-${ data.licences }-blue.svg)

  ## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Licences](#licences)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
### ${ data.description }

## Install
\`\`\`
${ data.install }
\`\`\`


          
## Usage
### ${ data.usage }
          
## Licences
![badge](https://img.shields.io/badge/License-${ data.licences }-blue.svg)  
This project is licenced under ${ data.licences }
        
## Contribution
### ${ data.contributing }
          
## Tests
### ${ data.tests }

## Questions
### [${ data.username } for GitHub](https://github.com/${ data.username })  
### ${ data.email } for ✉️ email

`;
}

module.exports = generateMarkdown;