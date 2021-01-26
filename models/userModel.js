const mysql = require('mysql');
const config = require('../_helpers/config');

let connection = mysql.createConnection(config);

connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    }

    let createUser = `create table if not exists users(
        ID INT PRIMARY KEY AUTO_INCREMENT,
        FIRST_NAME VARCHAR(10),
        MIDDLE_NAME VARCHAR(10),
        LAST_NAME VARCHAR(10),
        EMAIL VARCHAR(50),
        USERNAME VARCHAR(15),
        PASSWORD VARCHAR(20),
        ROLE TINYINT(1),
        AUTHORITY VARCHAR(15),
        ACCEPT_TERMS TINYINT(1)
    )`;

    connection.query(createUser, (err, results, fields) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log('Users created!')
        }
    });

    connection.end();
})