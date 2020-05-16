const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')




// array of questions for user
const questions = (writeToFile) =>{
    return inquirer.prompt([
        {
            type: "input",
            name: "project",
            message: "What is the project title?",
            validate: projectInput => {
                if (projectInput) {
                  return true;
                } else {
                  console.log('Please enter the title!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description of your project: ",
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a description!');
                  return false;
                }
              }
            
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter a useage!');
                  return false;
                }
              }
        },
        {
            type: "list",
            name: "license",
            message: "Chose some licenses that work for this project: ",
            choices: [
                "Apache",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this projects?",
            validate: contributingInput => {
                if (contributingInput) {
                  return true;
                } else {
                  console.log('Please enter the contributors!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test you would like to include?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please enter a username!');
                  return false;
                }
              }
    
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email: ",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter an email!');
                  return false;
                }
              }
        }
    ]);
}

// function to write README file
const writeToFile = (fileName, questions) => {

    const generateMarkdownResults = generateMarkdown(questions)
}

// function to initialize program
const init = () => {

}

// function call to initialize program
init();
