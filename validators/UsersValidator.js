const Helper = require("../helpers/UsersHelper");

class UsersValidator {
    async email(address) {
        let validation = true;

        if (
            (await Helper.addressExists(address)) === false ||
            Helper.addressCharactrs(address) === false
        ) {
            validation = false;
        }

        return validation;
    } //end email
} //end class

module.exports = UsersValidator;
