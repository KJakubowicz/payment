class MysqlParser {
    static methods = {
        createPayment: "createPayment",
        getPayments: "getPayments",
        updatePayment: "updatePayment",
        deletePayment: "deletePayment",
        createUser: "createUser",
        getUsers: "getUsers",
        updateUser: "updateUser",
        deleteUser: "deleteUser",
    }

    constructor() {} //end constructor()

    createPayment({ success, errorMessage, errorCode, data: { affectedRows, warningCount, insertId } }) {
        return {
            success,
            errorMessage,
            errorCode,
            additionalData: {
                affectedRows,
                warningCount,
                changedRows: warningCount,
                insertId,
            },
        };
    } //end createPayment()

    getPayments({ success, errorMessage, errorCode, data }) {
        return {
            success,
            errorMessage,
            errorCode,
            data,
        };
    } //end getPayments()

    updatePayment(data) {
         return {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            additionalData: {
                affectedRows: data.data.affectedRows,
                warningCount: data.data.warningCount,
                changedRows: data.data.warningCount,
            },
        };
    } //end updatePayment()

    deletePayment(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            additionalData: {
                affectedRows: data.data.affectedRows,
                warningCount: data.data.warningCount,
                changedRows: data.data.warningCount,
            },
        };
        return response;
    } //end deletePayment()

    createUser(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            additionalData: {
                affectedRows: data.data.affectedRows,
                warningCount: data.data.warningCount,
                changedRows: data.data.warningCount,
                insertId: data.data.insertId,
            },
        };
        return response;
    } //end createUser()

    getUsers(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            data: data.data,
        };
        return response;
    } //end getUsers()

    updateUser(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            additionalData: {
                affectedRows: data.data.affectedRows,
                warningCount: data.data.warningCount,
                changedRows: data.data.warningCount,
            },
        };
        return response;
    } //end updateUser()

    deleteUser(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            additionalData: {
                affectedRows: data.data.affectedRows,
                warningCount: data.data.warningCount,
                changedRows: data.data.warningCount,
            },
        };
        return response;
    } //end deleteUser()
} //end class

module.exports = MysqlParser;
