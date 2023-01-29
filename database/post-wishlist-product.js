const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function addProductToWishlist(userId, id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(userId, id)) return reject(false);
        db.query(
            "INSERT INTO wishlists (user_ID, product_ID) VALUES (?, ?);",
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

module.exports = {addProductToWishlist};