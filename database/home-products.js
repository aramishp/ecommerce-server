const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function getHomeProducts(minId, limit) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(minId, limit)) return reject(false);
        db.query(
            `SELECT * FROM products LIMIT ${minId}, ${limit}`,
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

module.exports = {getHomeProducts};