const db = require('./db');

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
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
