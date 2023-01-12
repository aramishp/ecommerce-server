const db = require('./db');

function deleteWishlistProduct(user_id, id) {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM wishlists WHERE product_ID = ? AND user_ID = ?", 
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

module.exports = {deleteWishlistProduct};
