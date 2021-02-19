const path = require('path');
const fs = require('fs');

const { createTable, setData, updateData } = require('../../_helpers/SQL_Functions');

module.exports = {
    createGRNEntryTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/createGRNEntry.sql')).toString();

        req._query = await createTable(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
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
            heatNo: req.body.heatNo,
            heatCode: req.body.heatCode,
            receivedQty: req.body.receivedQty,
            UOM: req.body.UOM
        };

        next();
    },

    insertnewGRN: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/insertNewGRN.sql')).toString();
        const _query = Object.values(req._newGRN);

        req._query = await setData(_statement, _query)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    updateAvailableQty: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/store/updateInventory.sql')).toString();

        req._query = await updateData(_statement)
        .then(results => {
            return {status: 200, data: results, error: null}
        })
        .catch(err => {
            console.log(err);
        })

        next();
    },

    repsonse: async (req, res, next) => {
        const { status, data, error } = req._query;
        res.status(status).send({ DATA: data, ERROR: error }).end();
        
        next();
    }

}