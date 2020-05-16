// Global Varibles
const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")

//README.md questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project"
        },
        {
            type: "input",
            name: "install",
            message: "If there is a installation process please desrcibe it",
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?"
        },
        {
            type: "list",
            name: "license",
            message: "What licenses will go along with this project",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How should people help contribute to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "If there are tests needed done for this project please describe them"
        },
        {
            type: "input",
            name: "issues",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email please"
        }
    ]);
} 

// function to write README file
function writeToFile(fileName, data) {
    const generateMarkdownResults = generateMarkdown(data)
}

const writeToFile = fileContent => {

    const generateMarkdownResults = generateMarkdown(data) 

    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };



// function to initialize program
const init = () => {
    console.log(`
=================
Create your professional README
=================
`);
questions()
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err);
    });
}
  
init();  