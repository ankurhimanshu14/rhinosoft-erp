const path = require('path');
const fs = require('fs');

const QueryFunction = require('../../_helpers/SQL_Functions');

module.exports = {
    createCuttingRequisition: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/cuttingProduction/requisition.sql')).toString();

        req._query = await QueryFunction(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    fetchCuttingDetails: async (req, res, next) => {
        req._newCutting = {
            partNo: req.body.partNo,
            grade: req.body.grade,
            section: req.body.section,
            
        };

        next();
    },

    insertnewCuttingPlan: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/cuttingProduction/insertCuttingPlan.sql')).toString();
        const _query = Object.values(req._newCutting);

        req._query = await QueryFunction(_statement, _query)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    updateTotalWeight: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/updateCuttingProduction.sql')).toString();

        req._query = await QueryFunction(_statement)
        .then(results => {
            return {status: 200, data: results, error: null}
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    response: async (req, res, next) => {
        const { status, data, error } = req._query;
        res.status(status).send({ DATA: data, ERROR: error }).end();
        
        next();
    }

}