const { areNumbers } = require('../../utils/check-are-number');
const db = require('../db');

function getMemorySales(limit, min) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(limit, min)) return reject(false);
        db.query(
            `SELECT p.*, s.discount FROM products AS p JOIN sales AS s \
            on s.product_ID = p.ID WHERE p.category = 'memories' LIMIT ${min}, ${limit}`,
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

module.exports = {getMemorySales};