const mysql  = require('mysql');
const config = require('../config');
const db     = mysql.createConnection({
    host     : config.db_host,
    user     : config.db_user,
    password : config.db_password,
    database : config.db_name,
});

db.connect((err) => {
    if (err) {
        throw err;
    }//end if
    console.log('Mysql connected...');
});

module.exports = db;
