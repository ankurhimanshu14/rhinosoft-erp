const mysql = require('mysql');
const config = require('../../_helpers/config');
const bcrypt = require('bcrypt');

let connection = mysql.createConnection(config);

module.exports = {
    fetchLoginDetails: (req, res, next) => {
        req._loginDetails = {
            _username: req.body.username,
            _password: req.body.password
        };


        if(!req._loginDetails) {
            res.status(401).json({msg: 'Credentials not entered.'}).end();
        } else {
            next();
        }
    },
    searchInMySQL: async (req, res, next) => {
        let stmt = `SELECT * FROM USERS WHERE USERNAME = ?`;
        let query = req._loginDetails._username;
        req_foundUser = connection.query(stmt, [query], (err, results, fields) => {
            if(err) throw err;
            results = JSON.stringify(results)
            return JSON.parse(results);
        })
        next();
    },
    verifyUser: async (req, res, next) => {
        console.log(req._foundUser);

        next();
    }
}