const path = require('path');
const fs = require('fs');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const config = require('../../_helpers/config');


const connection = mysql.createConnection(config);

module.exports = {
    createUserTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/createUserDb.sql')).toString();

        await connection.query(_statement, (err, results, fields) => {
            if(err) {
                throw err;
            } else {
                return results;
            }
        })

        next();
    },

    encryptPassword: async (req, res, next) => {
        req._encryptedPassword = await bcrypt.hash(req.body.password, 10)
        .then(hash => {return hash})
        .catch(err => console.log(err));

        next();
    },

    fetchUserData: async (req, res, next) => {
        req._newUser = {
            fullName: req.body.fullName,
            email: req.body.email,
            username: req.body.username,
            password: req._encryptedPassword
        }

        next();
    },

    insertNewUser: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/insertUser.sql')).toString();
        const _query = Object.values(req._newUser);

        await connection.query(_statement, _query, (err, results, fields) => {
            if(err) {
                res.status(404).send({ data: results, error: err }).end();
            } else {
                res.status(200).send({ data: results, error: err }).end();
            }
        })
    },

    response: async (req, res, next) => {
        // res.status(200).send('Query run successfully').end();
        
        // next();
    }
}