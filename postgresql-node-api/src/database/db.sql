CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, role, email, password)
VALUES ('Sebastián Valdez', 'admin', 'sebas@gmail.com','sebas123'),
       ('Martin Valdez', 'technical', 'martin@gmail.com','sebas123'),
         ('Juan Perez', 'no-technical', 'juan@gmail.com','sebas123');

SELECT * FROM users;