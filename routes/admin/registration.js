const mysql = require('mysql');
const config = require('../../_helpers/config');

let connection = mysql.createConnection(config);

const { FIELDS } = require('../../models/userModel');

module.exports = {
    getDataFromUser: (req, res, next) => {
        req._newUser = {
            [FIELDS.FULL_NAME]: req.body.fullName,
            [FIELDS.EMAIL]: req.body.email,
            [FIELDS.USERNAME]: req.body.username,
            [FIELDS.PASSWORD]: req.body.password,
        };

        next();
    },

    saveDataToMySQL: (req, res, next) => {

        let stmt = `INSERT INTO USERS(fullName, email, username, password) VALUES(?, ?, ?, ?)`;

        let user = Object.values(req._newUser);
        
        connection.query(stmt, user, (err, results, fields) => {
            if(err) {
                return err.message;
            } else {
                console.log(results.insertId);
            }
        });

        next();
    }
}