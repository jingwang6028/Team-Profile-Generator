// import class
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// import requirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

// html template from src folder
const generateHTML = require("./src/generateHTML");

// array to collect all the team members
const teamMemberArray = [];
class Team {
  constructor() {}

  // ask for if needed to add another member
  // if needed, add engineer or intern
  // else generateHTML(teamMemberArray) as html data, and then write index.html in disc folder
  askForAddMember(data) {
    if (data.addmember == "Engineer") {
      this.inputEngineer();
    } else if (data.addmember == "Intern") {
      this.inputIntern();
    } else {
      let htmlData = generateHTML(teamMemberArray);
      let writeToFile = fs.writeFile(
        "./disc/index.html",
        htmlData,
        function (err) {
          if (err) {
            console.log(err);
          }
          console.log("Successfully created index.html!");
        }
      );
      return writeToFile;
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
          name: "officeNumber",
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
        let manager = new Manager(
          answers.managername,
          answers.id,
          answers.email,
          answers.officeNumber
        );

        teamMemberArray.push(manager);

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
        let engineer = new Engineer(
          answers.engineername,
          answers.id,
          answers.email,
          answers.github
        );

        teamMemberArray.push(engineer);
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
        let intern = new Intern(
          answers.internname,
          answers.id,
          answers.email,
          answers.school
        );

        teamMemberArray.push(intern);
        this.askForAddMember(answers);
      });
  }
}

const team = new Team();
team.inputManager();
