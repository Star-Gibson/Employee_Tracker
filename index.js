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
// View Roles: roles() - Completed
function roles(){
    connection.query("SELECT * FROM roles", function(err, data){
        console.table(data);
        trackEmployees();
    })
}
// View Employee: employees() - Completed
function employees(){
connection.query("SELECT * FROM employee", function(err, data){
    console.table(data);  
    trackEmployees();
})
}
// View Departments: departments() - Completed
function departments(){
    connection.query("SELECT * FROM department", function (err, data){
        console.table(data); 
        trackEmployees();
    })
}

// Add Department: newDepartment() - Completed
function newDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What department would you like to add?"
    }, ]).then(function (choice) {
        connection.query('INSERT INTO department (name) VALUES (?)', (choice.department), function(err, data) {
            if (err) throw err;
            console.table("Department Added")
            console.table(choice);
           
        })
       trackEmployees(); 
    })
}
// Add Role: newRole() - Completed
function newRole() {
    inquirer.prompt([
        {
            message: "What is the employee's title?",
            type: "input",
            name: "title"
        }, 
        {
            message: "What is the yearly salary for this employee?",
            type: "number",
            name: "salary"
        }, 
        {
            message: "What is the employee's department ID?",
            type: "number",
            name: "deptID"
        }
    ]).then(function (choice) {
        connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [choice.title, choice.salary, choice.deptID], function (err, data) {
            if (err) throw err;
            console.table("Role Added"); 
            console.table(choice)
        })
       trackEmployees();
    })

}
// Add Employee: newEmployee() - Completed
function newEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "first",
            message: "What is the first name of the employee?"
        },
        {
            type: "input",
            name: "last",
            message: "What is the last name of the employee"
        },
        {
            type: "number",
            name: "rID",
            message: "What is this employee's role ID?"
        },
        {
            type: "number",
            name: "mID",
            message: "What is this employee's manager's ID?"
        }
    ]).then(function(choice) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [choice.first, choice.last, choice.rID, choice.mID], function(err, data) {
            if (err) throw err;
            console.table("Employee Added");
            console.table(choice);
            trackEmployees();
        })
    })
}

// Update Employee Role: updateEmployee() -