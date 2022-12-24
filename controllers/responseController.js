const MysqlParser = require("../parsers/db/mysql");

class Response {
    constructor() {
        this.provider = new MysqlParser();
    } //end constructor()

    success(data, method) {
        return JSON.stringify(this.provider[method](data));
    } //end success();
} //end class

module.exports = Response;
