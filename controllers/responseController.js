class Response {

    constructor() {
    }//end constructor()

    success(data) {
        console.log(data);
        const response = {
            message        : data.message,
            status         : 200,
            additionalData : data.additionalData,
        }

        return JSON.stringify(response);
    }//end success();

}//end class

module.exports = Response;