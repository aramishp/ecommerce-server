const { areStringForQuery } = require('../utils/are-string-for-query');
const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function updatePhotoById(id, photo) {
    return new Promise((resolve, reject) => {
        if(!areStringForQuery(photo)) return reject(false);
        if(!areNumbers(id)) return reject(false);
        db.query(
            `UPDATE users SET photo = '${photo}' WHERE ID = ${id}`,
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

module.exports = {updatePhotoById};