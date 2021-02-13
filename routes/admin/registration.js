const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const { createTable, setData } = require('../../_helpers/SQL_Functions');

module.exports = {
    createUserTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/createUserDb.sql')).toString();

        req._query = await createTable(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log('Promise Rejection Err: ' + err);
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

        req._query = await setData(_statement, _query)
        .then(results => {
            return {status: 200, data: results, error: null}
        })
        .catch(err => {
            return {status: 404, data: null, error: err}
        })

        next();
    },

    response: async (req, res, next) => {
        const { status, data, error } = req._query;
        res.status(status).send({ DATA: data, ERROR: error }).end();
        
        next();
    }
}