const { areStringForQuery } = require('../utils/are-string-for-query');
const db = require('./db');

function getNProducts(table) {
    return new Promise((resolve, reject) => {
        if(!areStringForQuery(table)) return reject(false);
        db.query(
            `SELECT COUNT(*) AS N FROM ${table}`,
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

module.exports = {getNProducts};