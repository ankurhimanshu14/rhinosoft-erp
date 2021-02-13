const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

const { getData } = require('../../_helpers/SQL_Functions');

module.exports = {
    getLoginDetails: async (req, res, next) => {
        req._username = req.body.username

        next();
    },

    searchInMySQL: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/loginUser.sql')).toString();

        req._query = await getData(_statement, req._username)
        .then(results => {
            results = JSON.stringify(results);
            results = JSON.parse(results);
            return results;
        })
        .catch(err => {
            return {status: 404, data: null, error: err}
        })

        next();
    },

    comparePassword: async (req, res, next) => {

        req._access = await bcrypt.compare(req.body.password, req._query[0].password)
        .then(results => {
            if(results) {
                return {status: 200, data: "Access Granted", error: null}
            } else {
                return {status: 200, data: "Access Denied", error: null}
            }
        })
        .catch(err => {
            return { status: 404, data: null, error: err }
        })

        next();
    },

    response: async (req, res, next) => {
        const { status, data, error } = req._access;
        res.status(status).send({ DATA: data, ERROR: error }).end();
        
        next();
    }
}