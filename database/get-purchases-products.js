const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function getPurchasesProducts(id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(id)) return reject(id);
        db.query(
            "SELECT od.quantity, p.* FROM products AS p JOIN order_details AS od \
            ON p.ID = od.product_ID JOIN orders AS o ON o.ID = od.order_ID WHERE o.user_ID = ? AND o.status = 'finished';",
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

function getDeliveredProducts(id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(id)) return reject(id);
        db.query(
            "SELECT od.quantity, p.* FROM products AS p JOIN order_details AS od \
            ON p.ID = od.product_ID JOIN orders AS o ON o.ID = od.order_ID WHERE o.user_ID = ? AND o.status = 'delivering';",
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

module.exports = {getPurchasesProducts, getDeliveredProducts};
