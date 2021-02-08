const mysql = require('mysql');
const config = require('../_helpers/config');

let connection = mysql.createConnection(config);

const FIELDS = {
    FULL_NAME: 'fullName',
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
        ${FIELDS.FULL_NAME} VARCHAR(50) NOT NULL,
        ${FIELDS.EMAIL} VARCHAR(255) NOT NULL,
        ${FIELDS.USERNAME} VARCHAR(15) NOT NULL,
        ${FIELDS.PASSWORD} LONGTEXT NOT NULL
    )ENGINE=INNODB DEFAULT CHARSET=utf8`;

    connection.query(SCHEMA, (err, results, fields) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log('Users table is ready!')
        }
    });
})

module.exports = { CONN: conn, FIELDS: FIELDS };