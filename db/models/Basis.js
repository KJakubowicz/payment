const CallHelper = require("../../helpers/CallHelper");
const Response = require("../../controllers/ResponseController");

class Basic {
    static find({ id, table }) {
        const response = new Response();
        const sql = `
            SELECT * FROM ${table} WHERE id = '${id}';
        `;

        return CallHelper.call({ sql, response });
    } //end find()

    static findAll({ table }) {
        const response = new Response();
        const sql = `
            SELECT * FROM ${table} WHERE 1;
        `;

        return CallHelper.call({ sql, response });
    } //end findAll()
} //end class

module.exports = Basic;
