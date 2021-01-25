const mysql = require('mysql');
const config = require('../_helpers/config');

let userConnection = mysql.createConnection(config);

const userConnection = require('../../models/userModel');

let sql = `INSERT INTO users(FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, COMPLETED)
VALUES('ANKUR', '', 'HIMANSHU', 'ankurhimanshu1408@gmail.com', 'ankur', 'ankur@123', true)`;

userConnection.query(sql);