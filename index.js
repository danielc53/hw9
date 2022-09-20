// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
 

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        tpye: "input",
        message: "What is the title/name of the repository?",
        name: "title",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What is the description of this repository?",
        name: "description",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What is the first name of the repository owner?",
        name: "fName",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
       type: "input",
       message: "What is the last name of the repository owner?",
       name: "lName",
       validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What is the email the owner of the repository can be reached at?",
        name: "email",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What is the owners repository username?",
        name: "username",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What are the installation instructions? (seperate using semicolon)",
        name: "install",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What is the usage of the repository?",
        name: "usage",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "list",
        message: "please select the license type.",
        name: "license",
        choices: 
            [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache License 2.0",
            "MIT License",
            "The Unlicense"
            ],
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "Can others contribute to this repository?",
        name: "contribute",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "What are the tests required? (seperate using semicolon)",
        name: "test",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
    {
        type: "input",
        message: "Questions about the repository?",
        name: "question",
        validate: (value) => {if(value){return true} else {return 'Provide a response'}}
    },
])
.then((data) => {fs.writeFile('README.md', writeToFile(data), (err) => err ? console.log(err) : console.log(data))})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeToFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log("successful");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        preventDefault(fileName, data);
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
