const db = require('../database/db');

function newUser(firstname, lastname, email, password) {
    return new Promise((resolve, reject) => {
        const sqlInsert = "INSERT INTO users (ID, first_name, last_name, email, address, photo, password) \
        VALUES (DEFAULT, ?, ?, ?, DEFAULT, DEFAULT, ?)";
        db.query(sqlInsert, [firstname, lastname, email, password], (error, result) => {
            if (error) {
                return reject(false);
            } else {
                return resolve(result); 
            }
        }); 
    }); 
}

module.exports = {newUser};