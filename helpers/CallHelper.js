const db = require("../db/Mysql");

module.exports = {
    async call({ sql, response }) {
        return new Promise((resolve) => {
            db.query(sql, function (error, results) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    }, //end call()
};
