USE company_tree;

INSERT INTO department(name)
	VALUES('Information Technology'),
		   ('Human Resources'),
           ('Member Services'),
           ('Facilities'),
           ('Legal'),
           ('Operations'),
           ('Finance'),
           ('Testing');
    
INSERT INTO comp_role(title, salary, department_id)
	VALUES('Support Specialist',50000,1),
		  ('SQL Database Engineer',120000, 1),
		  ('Specialist I', 38000,2),
          ('Technical Support Specialist',40000, 3),
          ('Coordinator', 55000, 4),
          ('Operations Chief-of-Staff', 100000, 5),
          ('General Council', 200000, 5),
          ('Specialist II', 55000, 6),
          ('Specialist III', 70000, 6),
          ('Payroll Specialist', 50000, 7),
          ('Chief Financial Officer', 300000, 7);
          
INSERT INTO employee(first_name, last_name, role_id)
	VALUES('John', 'Snow', 1),
		  ('Albert', 'Hitchcock', 1),
          ('Christina', 'Alphabet', 1),
          ('Zenyata', 'Omnic', 3),
          ('Steven', 'Reed', 2),
          ('Briana', 'Haegendoss', 6),
          ('Granthalamul', 'Haegendoss', 7),
          ('Olive', 'Barkus', 5),
          ('Thomas', 'Wu', 8),
          ('Jessica', 'Nguyen', 9),
          ('Wolfgang', 'Conrad', 11);
	