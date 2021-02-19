const mysql = require('mysql');
const config = require('./config');

let connection = mysql.createConnection(config);

let QueryFunction = (statement, ...rest) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, ...rest, (err, results, fields) => {
            if(err) {
                reject(new Error(err));
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = QueryFunction;