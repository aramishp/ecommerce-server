const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function addProductToCart(userId, id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(userId, id)) return reject(false);
        db.query(
            "SELECT user_ID, product_ID FROM carts WHERE user_ID = ? AND product_ID = ?",
            [userId, id],
            (err, res) => {
                if(err) {
                    return reject(err);
                } else {
                    if(!res.length) {
                        db.query(
                            "INSERT INTO carts (user_ID, product_ID, quantity) VALUES (?, ?, 1)",
                            [userId, id],
                            (err, result) => {
                                if(err) {
                                    return reject(err);
                                } else {
                                    return resolve(result);
                                }
                            }
                        );
                    } else {
                        return resolve(true);
                    }
                }
            }
        );
    });
}

module.exports = {addProductToCart};