const db = require('../database/db');
const { areNumbers } = require('../utils/check-are-number');

function getCartProducts(id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(id)) return reject(false);
        db.query(
            "SELECT c.quantity, p.* FROM carts AS c JOIN products AS p \
            ON c.product_ID = p.ID WHERE c.user_ID = ?;",
            id,
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

module.exports = {getCartProducts};