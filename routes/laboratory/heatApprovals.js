const path = require('path');
const fs = require('fs');

const QueryFunction = require('../../_helpers/SQL_Functions');

module.exports = {
    createApprovalTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/laboratory/createTable.sql')).toString();

        req._query = await QueryFunction(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    insertNewSteel: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/laboratory/heatApproval.sql')).toString();

        req._query = await QueryFunction(_statement)
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