// generate manager card
const generateManager = function (manager) {
  return `<div class="col-4 card">
      <div class="card-header">
          <h3>${manager.name}</h3>
          <div class="d-flex flex-row align-items-center">
              <i class="fas fa-mug-hot"></i>
              <h4>Manager</h4>
          </div>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">
          Email: <a href="mailto: ${manager.mail}">${manager.email}</a></li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
  </div>`;
};

// generate engineer card
const generateEngineer = function (engineer) {
  return `<div class="col-4 card">
      <div class="card-header">
          <h3>${engineer.name}</h3>
          <div class="d-flex flex-row align-items-center">
              <i class="fas fa-glasses"></i>
              <h4>Engineer</h4>
          </div>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub: <a href="#">${engineer.github}</a></li>
      </ul>
  </div>`;
};

// generate intern card
const generateIntern = function (intern) {
  return `<div class="col-4 card">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <div class="d-flex flex-row align-items-center">
                <i class="fas fa-user-graduate"></i>
                <h4>Intern</h4>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${intern.mail}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>`;
};

// for how many employees in the team, put all member card together
function generateCard(data) {
  let cardArray = [];

  for (let i = 0; i < data.length; i++) {
    let employee = data[i];
    let role = employee.getRole();

    if (role == "Manager") {
      let managerCard = generateManager(employee);
      cardArray.push(managerCard);
    }

    if (role == "Engineer") {
      let engineerCard = generateEngineer(employee);
      cardArray.push(engineerCard);
    }

    if (role == "Intern") {
      let internCard = generateIntern(employee);
      cardArray.push(internCard);
    }
  }

  let allEmployeesCards = cardArray.join("");

  let teamReady = generateTeam(allEmployeesCards);

  return teamReady;
}

// generate HTML page, put allEmployeesCard inside a html file
function generateTeam(allEmployeesCards) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
      <link rel="stylesheet" href="style.css">
      <title>Team-Profile-Generator</title>
  </head>
  
  <body>
      <header>
          <h1>Our Team</h1>
      </header>
      <main>
          <div class="container">
              <div class="d-flex flex-row flex-wrap justify-content-center">
                  ${allEmployeesCards}
              </div>
          </div>
      </main>
  
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  
  </html>`;
}

module.exports = generateCard;
