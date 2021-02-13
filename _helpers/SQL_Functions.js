const mysql = require('mysql');
const config = require('./config');

let connection = mysql.createConnection(config);

module.exports = {
    query: (statement, query, callback) => {
        return new Promise((resolve, reject) => {
            connection.query(statement, query, (err, results, fields) => {
                if(err) {
                    reject(new Error());
                } else {
                    resolve(callback(results));
                }
            })
        })
    }
}