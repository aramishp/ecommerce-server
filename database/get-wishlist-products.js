const db = require('./db');

function getProductsByTable(id) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT p.* FROM products AS p JOIN wishlists AS w \
            ON p.ID = w.product_ID WHERE w.user_ID = ?;",
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

module.exports = {getProductsByTable};