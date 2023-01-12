const db = require('./db');

function getHistoryProducts(id) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT p.* FROM products AS p JOIN historys AS h \
            ON p.ID = h.product_ID WHERE h.user_ID = ?;",
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

module.exports = {getHistoryProducts};