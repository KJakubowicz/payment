const db = require("../db/mysql");

class UsersHelper {
    static async addressExists(address) {
        let validation = true;
        const checkAddress = `
            SELECT 
                COUNT(id) as existsCount
            FROM users
            WHERE
                email = ('${address}')
        `;
        return new Promise((resolve, reject) => {
            db.query(checkAddress, function (error, results, fields) {
                if (error) {
                    validation = false;
                } else {
                    if (results[0].existsCount > 0) {
                        validation = false;
                    }
                }
                resolve(validation);
            });
        });
    } //end addressExists

    static addressCharactrs(address) {
        let validation = true;
        const result = String(address)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (result === null) {
            validation = false;
        }

        return validation;
    } //end addressCharactrs
} //end class

module.exports = UsersHelper;
