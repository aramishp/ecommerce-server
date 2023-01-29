const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function updatePassword(id, password) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(id)) return reject(false);
        db.query(
            `UPDATE users SET password = '${password}' WHERE ID = ${id}`,
            (err, result) => {
                if(err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            }
        );
    });
}

module.exports = {updatePassword};