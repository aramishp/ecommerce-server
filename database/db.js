const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../deploy-info/config');
const mysql = require("mysql2");

const db = mysql.createPool({
    multipleStatements: false,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
});

module.exports = db;