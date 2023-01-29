const { areStringForQuery } = require('../utils/are-string-for-query');
const db = require('./db');

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        if(!areStringForQuery(email)) return reject(false);
        const findUserQuery = "SELECT * FROM users WHERE email = ?";
        db.query(findUserQuery, [email], (error, response) => {
            if(error) {
                return reject(false);
            } else {
                return resolve(response[0]);
            }
        });
    });
}

module.exports = {findUserByEmail};
