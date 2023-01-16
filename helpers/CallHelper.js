const db = require("../db/Mysql");

module.exports = {
    async call({ sql, response }) {
        return new Promise((resolve) => {
            console.log(sql);
            db.query(sql, function (error, results) {
                if (error) {
                    console.log("jest");
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    console.log("jes2t");
                    response.setData(true, "", "", results);
                }
                console.log("jest3");
                resolve(response);
            });
        });
    }, //end call()
};
