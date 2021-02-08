const mysql = require('mysql');
const config = require('../../_helpers/config');
const bcrypt = require('bcrypt');

let connection = mysql.createConnection(config);

const { FIELDS } = require('../../models/userModel');

module.exports = {
    encryptPassword: async (req, res, next) => {
        req._encryptedPassword = await bcrypt.hash(req.body.password, 10)
        .then(hash => {
            return hash;
        })
        .catch(e => {
            console.log(e);
        })
        next();
    },

    getDataFromUser: async (req, res, next) => {
        req._newUser = {
            [FIELDS.FULL_NAME]: req.body.fullName,
            [FIELDS.EMAIL]: req.body.email,
            [FIELDS.USERNAME]: req.body.username,
            [FIELDS.PASSWORD]: req._encryptedPassword
        };
        next();
    },

    saveDataToMySQL: (req, res, next) => {
        let stmt = `INSERT INTO USERS(fullName, email, username, password) VALUES(?, ?, ?, ?)`;
        let user = Object.values(req._newUser);
        
        connection.query(stmt, user, (err, results, fields) => {
            if(err) {
                console.log(err.message)
            } else {
                console.log('New User ID: '+ results.insertId);
            }
        });

        next();
    }
}