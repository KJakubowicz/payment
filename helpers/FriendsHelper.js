const db = require("../db/Mysql");
const BasicHelper = require("../helpers/BasicHelper");
var crypto = require("crypto");
const CallHelper = require("../helpers/CallHelper");

class FriendsHelper extends BasicHelper {
    async relationshipExists(params) {
        let result = true;
        const response = this.response;
        const sql = `
            SELECT 
                COUNT(id) as existsCount
            FROM friends
            WHERE
                id_user = ('${params.id}')
                AND id_friend = ('${params.id_friend}');
        `;
        const callParams = {
            sql: sql,
            response: this.response,
        };
        CallHelper.call(callParams);
    } //end userExists
} //end class

module.exports = FriendsHelper;
