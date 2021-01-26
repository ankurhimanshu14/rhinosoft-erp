const mysql = require('mysql');
const config = require('../../_helpers/config');

let connection = mysql.createConnection(config);

module.exports = {
    getDataFromUser: (req, res, next) => {
        console.log('-----------Hello------------------');
        req._newUser = {
            'firstName': req.body.firstName,
            'middleName': req.body.middleName,
            'lastName': req.body.lastName,
            'email': req.body.email,
            'username': req.body.username,
            'password': req.body.password,
            'role': req.body.role,
            'authority': req.body.authority,
            'acceptTerms': req.body.acceptTerms
        };

        console.log('-----------------_newUser-------------------', req._newUser);

        next();
    },

    saveDataToMySQL: async (req, res, next) => {

        let statement = `INSERT INTO users(FIRST_NAME, MIDDLE_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE, AUTHORITY, ACCEPT_TERMS)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        let user = Object.values(req._newUser);

        req._savedUser = connection.query(statement, user, (err, results, fields) => {
            if(err) {
                console.log('Error: ' + err.message);
                return { status: 404, error: error.message, data: null };
            } else {
                console.log(results.InsertId)
                return { status: 200, error: null, data: results.InsertId }
            }
        });

        next();
    },
    
    sendResponse: (req, res, next) => {
        const { status, error, data } = req._savedUser;
        res.status(status).json({ error, data }).end();

        next();
    }
}