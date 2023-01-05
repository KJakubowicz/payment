const Helper = require("../helpers/UsersHelper");

class UsersValidator {
    constructor() {
        this.validation = true;
    } //end construcotr

    async email(address) {
        if (
            (await Helper.addressExists(address)) === false ||
            Helper.addressCharactrs(address) === false
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
