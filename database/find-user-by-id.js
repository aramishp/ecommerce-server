const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function findUserById(id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(id)) return reject(false);
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
