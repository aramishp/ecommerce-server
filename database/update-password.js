const db = require('./db');

function updatePassword(id, password) {
    return new Promise((resolve, reject) => {
        db.query(
            `UPDATE users SET password = '${password}' WHERE ID = ${id}`,
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

module.exports = {updatePassword};




//UPDATE users SET password = 'newpassword' WHERE `ID` = '2';