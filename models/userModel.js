const mysql = require('mysql');
const config = require('../_helpers/config');

let connection = mysql.createConnection(config);

connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    }

    let createUser = `create table if not exists users(
        ID INT PRIMARY KEY AUTO_INCREMENT,
        FIRST_NAME VARCHAR(10) NOT NULL,
        MIDDLE_NAME VARCHAR(10),
        LAST_NAME VARCHAR(10) NOT NULL,
        EMAIL VARCHAR(50) NOT NULL,
        USERNAME VARCHAR(15) NOT NULL,
        PASSWORD VARCHAR(20) NOT NULL
    )`;

    connection.query(createUser, (err, results, fields) => {
        if(err) {
            console.log(err.message);
        }
    });

    let sql = `INSERT INTO users(FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, COMPLETED)
    VALUES('ANKUR', '', 'HIMANSHU', 'ankurhimanshu1408@gmail.com', 'ankur', 'ankur@123', true)`;

    connection.query(sql);

    connection.end();
})