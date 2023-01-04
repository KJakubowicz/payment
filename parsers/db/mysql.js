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
    } //end createPayment()

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
    } //end createPayment()

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
    } //end createPayment()
} //end class

module.exports = MysqlParser;
