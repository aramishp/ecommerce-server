const db = require('./db');

function findUserById(id) {
    return new Promise((resolve, reject) => {
        const findUserQuery = "SELECT * FROM users WHERE ID = ?";
        db.query(findUserQuery, [id], (error, response) => {
            if(error) {
                return reject(error);
            } else {
                return resolve(response);
            }
        });
    });
}

module.exports = {findUserById};
