const inquirer = require('inquirer');
const mysql = require('mysql2');

const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, endConnection } = require('./utils/dbfunctions');

const userOptions = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 
            'View all employees', 'Add a department', 'Add a role',
            'Add an employee', 'Update an employee role', 'Exit application']
        }
    )

    .then(userChoice => {
        let choice = userChoice.options.valueOf();
        switch(choice) {
            case 'View all departments':

                viewDepartments();
                console.log('View all departments');
                userOptions();
                break;

            case 'View all roles':

                viewRoles();
                console.log('View all roles');
                userOptions();
                break;

            case 'View all employees':

                viewEmployees();
                console.log('View all employees');
                userOptions();
                break;

            case 'Add a department':
                inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the new department?'
                    }])
                    .then(response => {
                        addDepartment(response);
                        userOptions();
                    });
                break;

            case 'Add a role':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the name of the new role?'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Enter a salary for the new role:'
                    },
                    {
                        type: 'list',
                        name: 'department',
                        message: 'What department will the new role belong to? Sales(1) Engineering(2) Finance(3) Legal(4)',
                        choices: ['1', '2', '3', '4']
                    }])
                    .then(response => {
                        //console.log(response);
                        addRole(response);
                        userOptions();
                    });                
                break;

            case 'Add an employee':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first',
                        message: "What is the employee's first name?"
                    },
                    {
                        type: 'input',
                        name: 'last',
                        message: "What is the employee's last name?"
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: "What is the new employee's role? Salesperson(2), Engineer(5), Associate Engineer(6), Financial Analyst(8), Lawyer(10)",
                        choices: ['2', '5', '6','8','10']
                    },
                    {
                        type: 'list',
                        name: 'manager',
                        message: "Who is the new employee's manager? John Doe(1), Tammer Galal(8), Charles LeRoi(12), Edward Bellamy(15)",
                        choices: ['1', '8', '12', '15']
                    }])
                    .then(response => {
                        //console.log(response);
                        addEmployee(response);
                        userOptions();
                    });                
                break;

            case 'Update an employee role':
                console.log('Update an employee role');
                userOptions();
                break; 

            case 'Exit application':
                endConnection();
                console.log('Exit application');                
                break;           
        }
    });
};

userOptions();