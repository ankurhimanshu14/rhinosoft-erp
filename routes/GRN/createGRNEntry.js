const path = require('path');
const fs = require('fs');

const { createTable, setData } = require('../../_helpers/SQL_Functions');

module.exports = {
    createGRNEntryTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/createGRNEntry.sql')).toString();

        req._query = await createTable(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log('Promise Rejection Err: ' + err);
        })

        next();
    },

    fetchGRNDetails: async (req, res, next) => {
        req._newGRN = {
            challanNo: req.body.challanNo,
            challanDate: req.body.challanDate,
            partyCode: req.body.partyCode,
            vehicleNo: req.body.vehicleNo,
            itemCode: req.body.itemCode,
            itemDescription: req.body.itemDescription,
            quantity: req.body.quantity,
            UOM: req.body.UOM
        };

        console.log(req._newGRN);

        next();
    },

    insertnewGRN: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/insertNewGRN.sql')).toString();
        const _query = Object.values(req._newGRN);

        req._query = await setData(_statement, _query)
        .then(results => {
            return {status: 200, data: results, error: null}
        })
        .catch(err => {
            console.log(err);
            return {status: 404, data: null, error: err}
        })

        next();
    },

    repsonse: async (req, res, next) => {
        const { status, data, error } = req._query;
        res.status(status).send({ DATA: data, ERROR: error }).end();
        
        next();
    }

}