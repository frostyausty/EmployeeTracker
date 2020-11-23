require('dotenv').config()
const mysql = require('mysql2');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employees_db'
});

viewDepartments = function() {
    const sql = 'SELECT department.name, department.id FROM department';
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.table('\n', res);        
    });
};

viewRoles = function() {
    const sql = `SELECT role.id, role.title, role.salary, department.name AS 
                department_name 
                FROM role 
                RIGHT JOIN department 
                ON role.department_id = department.id`;
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.table('\n', res);        
    });
};



//employee.manager_id instead of CONCAT
viewEmployees = function() {
    const sql = `SELECT employee.id,
                    CONCAT(employee.first_name,' ', employee.last_name) AS Name, 
                    role.title, 
                    department.name AS Dept, 
                    role.salary,
                    employee.manager_id AS manager
                FROM employee
                JOIN role
                    ON employee.role_id = role.id
                LEFT JOIN department
                    ON role.department_id = department.id`;
                    //INNER JOIN employee - instead create a function
                    //call manager function AS manager
                
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.table('\n', res);        
    });
};

addDepartment = function(response) {
    const query = connection.query(
        `INSERT INTO department SET ?`,
        {
            //need to take response from inquirer and place as 'name'
            name: response['name'],
            id: this.lastID
        }, 
        function(err, res) {
            if (err) throw err;
            //console.log(res);
        }
    );
        console.log('\n','Department successfully added','\n')
};

addRole = function(response) {
    const query = connection.query(
        `INSERT INTO role SET ?`,
        {
            title: response['title'],
            salary: response['salary'],
            department_id: response['department'],
            id: this.lastID
        },
        function(err, res) {
            if(err) throw err;
            //console.log(res);
        }
    );
        console.log('\n','Role successfully added','\n');
};

addEmployee = function(response) {
    const query = connection.query(
        `INSERT INTO employee SET ?`,
        {
            first_name: response['first'],
            last_name: response['last'],
            role_id: response['role'],
            manager_id: response['manager'],
            id: this.lastID
        },
        function(err, res) {
            if(err) throw err;
            //console.log(res);
        }
    );
        console.log('\n','Employee successfully added','\n');
};

endConnection = function() {
    connection.end();
    console.log('Ended connection');
};

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, endConnection };