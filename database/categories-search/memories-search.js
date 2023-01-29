const db = require('../../database/db');
const { areNumbers } = require('../../utils/check-are-number');

function getMemories(limit, min) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(limit, min)) return reject(false);
        db.query(
            `SELECT * FROM products WHERE category = 'memory' LIMIT ${min}, ${limit}`,
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

module.exports = {getMemories};