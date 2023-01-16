const db = require("../db/Mysql");
const Response = require("../controllers/ResponseController");

class BasicHelper {
    constructor() {
        this.response = new Response();
    } //end constructor()
} //end class

module.exports = BasicHelper;
