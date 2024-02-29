// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//ask all the questions make sure they prompt up and make sure responses generate something...
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description"
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation"
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage"
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "None"
    ]
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What are the tests for your project?",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub"
  }, 
  {
    type: "input",
    message: "What is your email address?",
    name: "email"

  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
