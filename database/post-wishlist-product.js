const db = require('./db');

function addProductToWishlist(userId, id) {
    return new Promise((resolve, reject) => {
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