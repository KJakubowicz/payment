const Helper = require("../helpers/FriendsHelper");
const UserHelper = require("../helpers/UsersHelper");

class FriendsValidator {
    validation = true;
    constructor() {
        this.helper = new Helper();
    }
    async relationship(params) {
        if (
            !(await UserHelper.userExists(params.id)) ||
            !this.helper.relationshipExists(params)
        ) {
            this.validation = false;
        }
        console.log(this.validation);
        return this.validation;
    } //end email
} //end class

module.exports = FriendsValidator;
