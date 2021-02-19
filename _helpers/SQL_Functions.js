const mysql = require('mysql');
const config = require('./config');

let connection = mysql.createConnection(config);

module.exports = {
    createTable: (sqlStatement) => {
        return new Promise((resolve, reject) => {
            connection.query(sqlStatement, (err, results, fields) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(results);
                }
            })
        })
    },

    setData: (sqlStatement, data) => {
        return new Promise((resolve, reject) => {
            connection.query(sqlStatement, data, (err, results, fields) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(results);
                }
            })
        })
    },

    getData: (sqlStatement, _query) => {
        return new Promise((resolve, reject) => {
            connection.query(sqlStatement, _query, (err, results, fields) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(results);
                }
            })
        })
    },

    updateData: (sqlStatement) => {
        return new Promise((resolve, reject) => {
            connection.query(sqlStatement, (err, results, fields) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(results);
                }
            })
        })
    }
}