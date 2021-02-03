const mysql = require('mysql');
const config = require('../../_helpers/config');

let connection = mysql.createConnection(config);

const { FIELDS } = require('../../models/userModel');

module.exports = {
    getDataFromUser: (req, res, next) => {
        req._newUser = {
            [FIELDS.FIRST_NAME]: req.body.firstName,
            [FIELDS.MIDDLE_NAME]: req.body.middleName,
            [FIELDS.LAST_NAME]: req.body.lastName,
            [FIELDS.EMAIL]: req.body.email,
            [FIELDS.USERNAME]: req.body.username,
            [FIELDS.PASSWORD]: req.body.password,
        };

        next();
    },

    saveDataToMySQL: (req, res, next) => {

        let stmt = `INSERT INTO USERS(firstName, middleName, lastName, email, username, password) VALUES(?, ?, ?, ?, ?, ?)`;

        let user = Object.values(req._newUser);
        
        connection.query(stmt, user, (err, results, fields) => {
            if(err) {
                return err.message;
            } else {
                console.log(results.insertId);
            }
        });

        next();
    },
    
    sendResponse: (req, res, next) => {
        // const { status, error, data } = req._savedUser;
        // console.log(status);
        // res.json({ error, data }).end();

        next();
    }
}