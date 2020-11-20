INSERT INTO department(name)
    VALUES
        ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role(title, salary, department_id)
    VALUES 
        ('Sales Manager', 100000, 1),
        ('Salesperson', 40000, 1),
        ('Sales Lead', 60000, 1),
        ('Lead Engineer', 100000, 2),
        ('Engineer', 65000, 2),
        ('Associate Engineer', 50000, 2),
        ('Accountant', 110000, 3),
        ('Financial Analyst', 70000, 3),
        ('Legal Team Lead', 250000, 4),
        ('Lawyer', 120000, 4);

-- INSERT INTO manager(first_name, last_name)
--     VALUES


INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
        ('John', 'Doe', 1, null),
        ('Mike', 'Chan', 2, 1),
        ('Ashley', 'Rodriguez', 2, 1),
        ('Kevin', 'Tupik', 2, 1),
        ('Malia', 'Brown', 2, 1),
        ('Sarah', 'Lourd', 3, 1),
        ('Tom', 'Allen', 3, 1),
        ('Tammer', 'Galal', 4, null),
        ('Ronald', 'Firbank', 5, 2),
        ('Virginia', 'Woolf', 5, 2),
        ('Piers', 'Gaveston', 6, 2),
        ('Charles', 'LeRoi', 7, null),
        ('Katherine', 'Mansfield', 8, 3),
        ('Dora', 'Carrington', 8, 3),
        ('Edward', 'Bellamy', 9, null),
        ('Montague', 'Summers', 10, 4),
        ('Octavia', 'Butler', 10, 4),
        ('Unica', 'Zurn', 10, 4);


