USE trackerDB;

-- DEPARTMENT SEEDS
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Human Resources");
INSERT INTO department (name)
VALUE ("Accounting");
INSERT INTO department (name)
VALUE ("Sales");

-- ROLE SEEDS
INSERT INTO roles (title, salary, department_id)
VALUE ("SR. Software Engineer", 250000, 2);
INSERT INTO roles (title, salary, department_id)
VALUE ("JR. Software Engineer", 85000, 4);
INSERT INTO roles (title, salary, department_id)
VALUE ("HR Manager", 100000, 3);
INSERT INTO roles (title, salary, department_id)
VALUE ("Sales Lead", 105000, 2);
INSERT INTO roles (title, salary, department_id)
VALUE ("Salesperson", 60000, 1);
INSERT INTO roles (title, salary, department_id)
VALUE ("Scrum Master", 120000, 3);
INSERT INTO roles (title, salary, department_id)
VALUE ("Team Lead", 190000, 1);

-- EMPLOYEE SEEDS 
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Air", "Jordan", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("JJ", "Reddick", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Que","Jackson",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Sam", "Gibson", 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Yankee", "Doodle", 3, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Freddy", "Krugger", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Timmy", "Turner", 1, 7);