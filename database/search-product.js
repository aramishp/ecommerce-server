const db = require('./db');

function searchProduct(product) {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM products WHERE name like '%${product}%' or description like '%${product}%'`,
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

module.exports = {searchProduct};