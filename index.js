const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/page_template");

const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const newMemberData = [];

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
        }
      },
    },

    //--Getting employee id number--
    {
      type: "input",
      name: "id",
      message: "Please provide employee ID number.",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Invalid ID. Please provide a valid employee ID number.");
          return false;
        }
      },
    },

    //--Getting employee email--
    {
      type: "input",
      name: "email",
      message: "Please provide the member's email address.",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Invalid email. Please provide a valid email address");
        }
      },
    },
  ]);

  if (answers.role === "Manager") {
    const managerQues = await inquirer.prompt([
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
      },
    ]);
    const addManager = new manager(
      answers.name,
      answers.id,
      answers.email,
      managerQues.office
    );
    newMemberData.push(addManager);


  } else if (answers.role === "Engineer") {
    const engineerQues = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "Please provide the member's github username.",
      },
    ]);

    const addEngineer = new engineer(
      answers.name,
      answers.id,
      answers.email,
      engineerQues.github
    );

    newMemberData.push(addEngineer);


  } else if (answers.role === "Intern") {
    const internQues = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "Please provide the intern's school name.",
      },
    ]);
    const addIntern = new intern(
      answers.name,
      answers.id,
      answers.email,
      internQues.school
    );

    newMemberData.push(addIntern);
  }
   
};

async function finalQues() {
  await questions();

  const addQues = await inquirer.prompt([
    {
      type: 'list',
      name: 'addMember',
      message: 'Do you want to add another member to this team?',
      choices: ['Yes. Add new member', 'No. Team is complete'],
    },
  ]);
  if (addQues.addMember === 'Yes. Add new member') {
    return finalQues();

  } else {
    return teamComplete();
  };
};
finalQues();

function teamComplete () {
  console.log("New Team: ", newMemberData);
  fs.writeFileSync('./dist/index.html', pageTemplate(newMemberData), "utf-8")
}