const inquirer = require('inquirer');
const mysql = require('mysql2');

const { viewDepartments, viewRoles, viewEmployees, endConnection } = require('./utils/dbfunctions');

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
                console.log('Add a department');
                userOptions();
                break;

            case 'Add a role':
                console.log('Add a role');
                userOptions();
                break;

            case 'Add an employee':
                console.log('Add an employee');
                userOptions();
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