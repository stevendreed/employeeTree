-- warning: schema resets the model: run to initialize the db ONLY --
DROP DATABASE IF EXISTS company_tree;

-- initialize DB -- 
CREATE DATABASE company_tree;

USE company_tree;
	CREATE TABLE department(
		id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL UNIQUE,
        PRIMARY KEY (id)
	);
    CREATE TABLE dept_role(
		id int NOT NULL AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL,
        department_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (department_id)
			REFERENCES department(id)
            ON DELETE SET NULL
    );
    CREATE TABLE employee(
		id int NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (role_id)
			REFERENCES dept_role(id)
            ON DELETE SET NULL,
		FOREIGN KEY (manager_id)
			REFERENCES employee(id)
            ON DELETE SET NULL
    );