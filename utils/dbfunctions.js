const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
});

viewDepartments = function() {
    const sql = 'SELECT * FROM department';
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.log(res);        
    });
};

viewRoles = function() {
    const sql = 'SELECT * FROM role';
    connection.query(sql, function(err, res) {
        if (err) throw err;
        console.log(res);        
    });
};

viewEmployees = function() {
    const sql = 'SELECT * FROM employee';
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