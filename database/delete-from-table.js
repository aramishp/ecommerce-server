const db = require('./db');

function deleteFromTable(user_id, id, table) {
    return new Promise((resolve, reject) => {
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
