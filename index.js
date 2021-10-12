// import class
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// import requirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");

class Team {
  constructor() {}

  // ask for if needed to add another member
  askForAddMember(data) {
    if (data.addmember == "Engineer") {
      this.inputEngineer();
    } else if (data.addmember == "Intern") {
      this.inputIntern();
    } else {
      this.quit();
    }
  }

  // inquirer prompt questions for manager
  inputManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managername",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
        },
        {
          type: "input",
          name: "officenumber",
          message: "What is the team manager's office number?",
        },
        {
          type: "list",
          name: "addmember",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((answers) => {
        console.log(answers);
        let newManager = new Manager(
          answers.managername,
          answers.id,
          answers.email,
          answers.officenumber
        );

        this.askForAddMember(answers);
      });
  }

  // inquirer prompt questions for engineer
  inputEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineername",
          message: "What is the team engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the team engineer's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the team engineer's email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the team engineer's GitHub username?",
        },
        {
          type: "list",
          name: "addmember",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((answers) => {
        console.log(answers);
        let newEngineer = new Engineer(
          answers.engineername,
          answers.id,
          answers.email,
          answers.github
        );
        this.askForAddMember(answers);
      });
  }

  // inquirer prompt questions for intern
  inputIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internname",
          message: "What is the team intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the team intern's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the team intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the team intern's school?",
        },
        {
          type: "list",
          name: "addmember",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((answers) => {
        console.log(answers);
        let newIntern = new Intern(
          answers.internname,
          answers.id,
          answers.email,
          answers.school
        );
        this.askForAddMember(answers);
      });
  }

  quit() {}
}

const team = new Team();
team.inputManager();
