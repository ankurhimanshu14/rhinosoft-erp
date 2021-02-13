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

    insertData: (sqlStatement, data) => {
        return new Promise((resolve, reject) => {
            connection.query(sqlStatement, data, (err, results, fields) => {
                if(err) {
                    reject(new Error(err));
                } else {
                    resolve(results);
                }
            })
        })
    }
}