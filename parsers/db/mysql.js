class MysqlParser {
    constructor() {} //end constructor()

    createPayment(data) {
        const response = {
            status: 200,
            success: data.protocol41,
            message: data.message,
            additionalData: {
                affectedRows: data.affectedRows,
                warningCount: data.warningCount,
                changedRows: data.warningCount,
                insertId: data.insertId,
            },
        };
        return response;
    } //end createPayment()

    getPayments(data) {
        const response = {
            status: 200,
            data: data,
        };
        return response;
    } //end createPayment()

    updatePayment(data) {
        const response = {
            status: 200,
            success: data.protocol41,
            message: data.message,
            additionalData: {
                affectedRows: data.affectedRows,
                warningCount: data.warningCount,
                changedRows: data.warningCount,
            },
        };
        return response;
    } //end createPayment()

    deletePayment(data) {
        const response = {
            status: 200,
            data: data,
        };
        return response;
    } //end createPayment()
} //end class

module.exports = MysqlParser;
