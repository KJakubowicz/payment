const MysqlParser = require("../parsers/db/Mysql");

class Response {
    success;
    errorMessage;
    errorCode;
    data;
    response;

    constructor() {
        this.provider = new MysqlParser();
    } //end constructor()

    setData(success, errorMessage, errorCode, data) {
        this.success = success;
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
        this.data = data;
    } //end setData();

    getResponse(method) {
        return JSON.stringify(
            this.provider[method]({
                success: this.success,
                errorMessage: this.errorMessage,
                errorCode: this.errorCode,
                data: this.data,
            })
        );
    } //end getResponse();
} //end class

module.exports = Response;
