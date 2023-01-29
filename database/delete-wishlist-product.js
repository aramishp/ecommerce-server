const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function deleteWishlistProduct(user_id, id) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(user_id, id)) return reject(false);
        db.query("DELETE FROM wishlists WHERE product_ID = ? AND user_ID = ?", 
        [id, user_id], 
        (error, response) => {
            if(error) {
                console.log(error)
                return reject(false);
            } else {
                return resolve(true);
            }
        });
    });
}

module.exports = {deleteWishlistProduct};
