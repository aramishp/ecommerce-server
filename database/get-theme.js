const db = require('./db');

function getTheme(userId) {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT dark_mode FROM settings where user_ID = ${userId}`,
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

function postTheme(userId, dark_mode) {
    return new Promise((resolve, reject) => {
        if(dark_mode) {
            dark_mode = 1;
        } else {
            dark_mode = 0;
        }
        db.query(
            `SELECT dark_mode FROM settings where user_ID = ${userId}`,
            (err, result) => {
                if(err) {
                    return reject(err);
                } else {
                    if(!result.length) {
                        db.query(
                            `INSERT INTO settings VALUES (?, ?)`, 
                            [userId, dark_mode],
                            (err, result2) => {
                                if(err) {
                                    return reject(err);
                                } else {
                                    return resolve(result2);
                                }
                            })
                    } else {                      
                        db.query(`UPDATE settings SET dark_mode = ${dark_mode} WHERE user_ID = ${userId};`,
                        (err, result2) => {
                            if(err) {
                                return reject(err);
                            } else {
                                return resolve(result2);
                            }
                        })
                    }
                }
            }
        );
    });
}

module.exports = {getTheme, postTheme};