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
        console.table(res);        
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
        console.log(res);        
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
                    //INNER JOIN employee
                    //call manager function AS manager
                
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.log(res);        
    });
};

endConnection = function() {
    connection.end();
    console.log('Ended connection');
};

module.exports = { viewDepartments, viewRoles, viewEmployees, endConnection };