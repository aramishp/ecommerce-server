const db = require('./db');

function getFavoritesId(id) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT product_ID FROM wishlists WHERE user_ID = ?;",
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

module.exports = {getFavoritesId};