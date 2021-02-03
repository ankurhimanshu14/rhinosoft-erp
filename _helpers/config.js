require('dotenv').config();
const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: process.env.DATABASE
};

module.exports = config;