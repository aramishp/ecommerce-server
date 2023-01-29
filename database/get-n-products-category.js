const { areStringForQuery } = require('../utils/are-string-for-query');
const db = require('./db');

function getNProductsCategory(category) {
    return new Promise((resolve, reject) => {
        if(!areStringForQuery(category)) return reject(false);
        db.query(
            `SELECT COUNT(*) AS N FROM products WHERE category = '${category}'`,
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

module.exports = {getNProductsCategory};