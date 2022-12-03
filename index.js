const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page_template");

const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const newMembers = [];

const questions = async () => {
  const answers = await inquirer.prompt([
    
    //--Getting employee position--
    {
      type: "list",
      name: "role",
      message: "What is the member's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },

    //--Getting employee name--
    {
      type: "input",
      name: "name",
      message: "Please provide the member's full name.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Invalid response. Please provide the member's full name."
          );
          return false;
        };
      },
    },

    //--Getting employee id number--
    {
        type:'input',
        name: 'id',
        message: "Please provide employee ID number.",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log('Invalid ID. Please provide a valid employee ID number.');
                return false;
            };
        },
    },

    {
        type: 'input',
        name: 'email',
        message: "Please provide the member's email address.",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log('Invalid email. Please provide a valid email address');
            };
        }
    },

  ]);
};
