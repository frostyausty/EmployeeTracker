const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
});

viewDepartments = function() {
    const sql = 'SELECT department.name, department.id FROM department';
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.log(res);        
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
                    employee.first_name, 
                    employee.last_name, 
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