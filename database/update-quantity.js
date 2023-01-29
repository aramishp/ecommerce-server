const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function changeQuantity(userId, id, value) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(userId, id, value)) return reject(false);
        db.query(
            `UPDATE carts SET quantity = '${value}' WHERE user_ID = ? AND product_ID = ?;`,
            [userId, id],
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

module.exports = {changeQuantity};