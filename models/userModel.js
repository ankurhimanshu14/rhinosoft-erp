const mysql = require('mysql');
const config = require('../_helpers/config');

let connection = mysql.createConnection(config);

const FIELDS = {
    FIRST_NAME: 'firstName',
    MIDDLE_NAME: 'middleName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    USERNAME: 'username',
    PASSWORD: 'password'
}

const conn = connection.connect((err) => {
    if(err) {
        return console.error('Error: ' + err.message);
    }

    let SCHEMA = `CREATE TABLE IF NOT EXISTS USERS(
        ID INT PRIMARY KEY AUTO_INCREMENT,
        ${FIELDS.FIRST_NAME} VARCHAR(10) NOT NULL,
        ${FIELDS.MIDDLE_NAME} VARCHAR(10),
        ${FIELDS.LAST_NAME} VARCHAR(10) NOT NULL,
        ${FIELDS.EMAIL} VARCHAR(50) NOT NULL,
        ${FIELDS.USERNAME} VARCHAR(15) NOT NULL,
        ${FIELDS.PASSWORD} VARCHAR(20) NOT NULL
    )ENGINE=INNODB`;

    connection.query(SCHEMA, (err, results, fields) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log('Users table is ready!')
        }
    });
})

module.exports = { CONN: conn, FIELDS: FIELDS };