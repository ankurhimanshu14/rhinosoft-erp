CREATE TABLE IF NOT EXISTS users
(
    id INT PRIMARY KEY auto_increment,
    employeeId VARCHAR(10) NOT NULL,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    password LONGTEXT NOT NULL,
    role ENUM { "Admin", "User" } DEFAULT "User",
    acceptTerms BOOLEAN DEFAULT "false"
);