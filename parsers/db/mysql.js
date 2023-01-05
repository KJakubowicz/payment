class MysqlParser {
    constructor() {} //end constructor()

    createPayment(data) {
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
    } //end createPayment()

    getPayments(data) {
        const response = {
            success: data.success,
            errorMessage: data.errorMessage,
            errorCode: data.errorCode,
            data: data.data,
        };
        return response;
    } //end getPayments()

    updatePayment(data) {
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
