//Dependencies
const mysql = require('mysql');
const inquirer = require("inquirer");
const cTable = require('console.table')

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
    name:"objective",
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
    ]
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

//Functions
// View Roles: roles();
function roles(){
    connection.query("SELECT * FROM roles", function(err, choice){
        console.table(choice); //Shows updated table w/ data
        trackEmployees();
    })
}
// View Employee: employees();
function employees(){
connection.query("SELECT * FROM employee", function(err, choice){
    console.table(choice);  //Shows updated table w/ data
    trackEmployees();
})
}
// View Departments: departments();
function departments(){
    connection.query("SELECT * FROM department", function (err, choice){
        console.table(choice);  //Shows updated table w/ data
        trackEmployees();
    })
}

// Add Department: newDepartment() - Completed
function newDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What department would you like to add?"
    }, ]).then(function(choice) {
        connection.query('INSERT INTO department (name) VALUES (?)', [choice.department], function(err, data) {
            if (err) throw err;
            console.table("Department Added");
           trackEmployees();
        })
    })
}
// Add Role: newRole();
// Add Employee: newEmployee();
// Update Employee Role: updateEmployee();