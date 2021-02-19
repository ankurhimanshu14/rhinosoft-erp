const path = require('path');
const fs = require('fs');

const QueryFunction = require('../../_helpers/SQL_Functions');

module.exports = {
    createPartMasterTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/master/partMaster.sql')).toString();

        req._query = await QueryFunction(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    fetchPartDetails: async (req, res, next) => {
        req._newPart = {
            partNo: req.body.partNo,
            partName: req.body.partName,
            cutWeight: req.body.cutWeight,
            grossWeight: req.body.grossWeight,
            grade: req.body.grade,
            section: req.body.section
        };

        next();
    },

    insertnewPart: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/master/insertNewPart.sql')).toString();
        const _query = Object.values(req._newPart);

        req._query = await QueryFunction(_statement, _query)
        .then(results => {
            return {status: 200, data: results, error: null}
        })
        .catch(err => {
            console.log(err);
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