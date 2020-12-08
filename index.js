//Dependencies
const mysql = require('mysql');
const inquirer = require("inquirer");
const { resolveSoa } = require('dns');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    //Insert Function 
    trackEmployees();
});

function trackEmployees(){
inquirer.prompt({
    message: "What would you like to do next?",
    type: "list",
    choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Role",
        "Exit application"
    ],
    name:"objective"
}).then(function(answer){
    switch(answer.objective) {
        case "Add Department":
            newDepartment();
            break;
        
        case "Add Role":
            newRole();
            break;
        
        case "Add Employee":
            newEmployee();
            break;

        case "View Departments":
            departments();
            break;

        case "View Roles":
            roles();
            break
        
        case "View Employees":
            employees();
            break;

        case "Update Employee Role":
            updateEmployee();
            break;

        default:
            connection.end();
            break;
    }
})
}

//Functions needed/Todo's:
// Add Department: newDepartment();
// Add Role: newRole();
// Add Employee: newEmployee();
// View Departments: departments();
// View Roles: roles();
// View Employee: employee();
// Update Employee Role: updateEmployee();