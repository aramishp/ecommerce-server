const { areStringForQuery } = require('../utils/are-string-for-query');
const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function deleteFromTable(user_id, id, table) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(userId, id) || !areStringForQuery(table)) return reject(false);
        db.query(`DELETE FROM ${table} WHERE product_ID = ? AND user_ID = ?`, 
        [id, user_id], 
        (error, response) => {
            if(error) {
                return reject(false);
            } else {
                return resolve(true);
            }
        });
    });
}

module.exports = {deleteFromTable};
