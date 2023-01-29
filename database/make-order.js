const { areNumbers } = require('../utils/check-are-number');
const db = require('./db');

function makeOrder(userId, total) {
    return new Promise((resolve, reject) => {
        if(!areNumbers(userId, total)) return reject(false);
        db.query(
            "INSERT INTO orders (`user_ID`, `status`, `price`) VALUES (?, 'delivering', ?);",
            [userId, total],
            (err, result) => {
                if(err) {
                    return reject(err);
                } else {
                    db.query("SELECT * FROM carts WHERE user_ID = ?",
                    [userId],
                    (err, result2) => {
                        if(err) {
                            return reject(false);
                        } else {
                            result2.forEach(element => {
                                db.query("INSERT INTO order_details (order_ID, product_ID, quantity) VALUES (?, ?, ?);",
                                [result.insertId, element.product_ID, element.quantity],
                                (err, result3) => {
                                    if(err) {
                                        return reject(err);
                                    }
                                })
                            })
                            db.query("DELETE FROM carts WHERE user_ID = ?;",
                            userId,
                            (req, result4) => {
                                if(err) {
                                return reject(err);
                            } else {
                                return resolve(true)
                            }})     
                        }
                    })
                }
            }
        );
    });
}

module.exports = {makeOrder};

//INSERT INTO orders (`user_ID`, `status`, `price`) VALUES ('3', 'delivering', '12547');