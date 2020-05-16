// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${ data.title }

  ![badge](https://img.shields.io/badge/License-${ data.license }-blue.svg)

  ## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#useage)
- [License](#lincenses)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
### ${ data.description }

## Install
\`\`\`
${ data.install }
\`\`\`


          
## Useage
### ${ data.useage }
          
## Lincenses
![badge](https://img.shields.io/badge/License-${ data.license }-blue.svg)  
This project is licensed under ${ data.license }
        
## Contribution
### ${ data.contributing }
          
## Tests
### ${ data.tests }

## Questions
### [${ data.username } for GitHub](https://github.com/${ data.username })  
### ${ data.email } for email

`;
}

module.exports = generateMarkdown;