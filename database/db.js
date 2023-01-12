const mysql = require("mysql2");

const db = mysql.createPool({
    multipleStatements: false,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "ecommerce"
});

module.exports = db;