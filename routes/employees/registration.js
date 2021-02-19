const path = require('path');
const fs = require('fs');

const QueryFunction = require('../../_helpers/SQL_Functions');

module.exports = {
    createEmployeeTable: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/employees/createEmployeesDb.sql')).toString();

        req._query = await QueryFunction(_statement)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log('Promise Rejection Err: ' + err);
        })

        next();
    },

    fetchEmployeeData: async (req, res, next) => {
        req._newEmployee = {
            FIRST_NAME: req.body.firstName,
            MIDDLE_NAME: req.body.middleName,
            LAST_NAME: req.body.lastName,
            DATE_OF_BIRTH: req.body.dateOfBirth,
            DATE_OF_JOINING: req.body.dateOfJoining,
            DATE_OF_LEAVING: req.body.dateOfLeaving,
            DEPARTMENT: req.body.department,
            DESIGNATION: req.body.designation
        }

        next();
    },

    insertNewEmployee: async (req, res, next) => {
        const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/employees/insertEmployee.sql')).toString();
        const _query = Object.values(req._newEmployee);

        req._query = await QueryFunction(_statement, _query)
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