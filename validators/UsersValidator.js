const Helper = require("../helpers/UsersHelper");

class UsersValidator {
    validation = true;

    async email(address) {
        if (
            !await Helper.addressExists(address) ||
            !Helper.addressCharactrs(address)
        ) {
            this.validation = false;
        }

        return this.validation;
    } //end email

    async userExists(id) {
        if ((await Helper.userExists(id)) === false) {
            this.validation = false;
        }

        return this.validation;
    }
} //end class

module.exports = UsersValidator;
