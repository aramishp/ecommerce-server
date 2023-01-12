const db = require('../db');

function getNSalesCategory(category) {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT COUNT(*) AS N FROM products AS p JOIN sales AS s ON p.ID = s.product_ID WHERE p.category = '${category}';`,
            (err, result) => {
                if(err) {
                    return reject(err);
                } else {
                    return resolve(result[0]);
                }
            }
        );
    });
}

module.exports = {getNSalesCategory};