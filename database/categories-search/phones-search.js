const db = require('../../database/db');

function getPhones(limit, min) {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM products WHERE category = 'phones' LIMIT ${min}, ${limit}`,
            (err, result) => {
                if(err) {
                    return reject(false);
                } else {
                    return resolve(result);
                }
            }
        );
    });
}

module.exports = {getPhones};