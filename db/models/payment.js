const db = require("../Mysql");
const Response = require("../../controllers/ResponseController");
const DateHelper = require("../../helpers/DateHelper");
const UsersValidator = require("../../validators/UsersValidator");

class Payment {
    constructor(title, total, userId) {
        this.title = title;
        this.total = total;
        this.userId = userId;
    } //end constructor()

    async save() {
        const response = new Response();
        const usersValidator = new UsersValidator();

        if ((await usersValidator.userExists(this.userId)) === false) {
            response.setData(false, "User doesn't exists", 404, []);
            return response;
        }

        const createdAtDate = DateHelper.getActualSqlDate();
        const insertSql = `
            INSERT INTO payments
                (created_by, title, total, created_at) 
            VALUES 
                ('${this.userId}', '${this.title}', '${this.total}', '${createdAtDate}')
        `;

        return new Promise((resolve, reject) => {
            db.query(insertSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end save()

    async update(id) {
        const response = new Response();
        const createdAtDate = DateHelper.getActualSqlDate();
        const updateSql = `
            UPDATE payments
            SET
                title = '${this.title}',
                total ='${this.total}',
                created_at = '${createdAtDate}'
            WHERE 
                id = '${id}'
        `;

        return new Promise((resolve, reject) => {
            db.query(updateSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end update()

    async delete(id) {
        const response = new Response();
        const deleteSql = `
            DELETE FROM payments
            WHERE 
                id = '${id}'
        `;

        return new Promise((resolve, reject) => {
            db.query(deleteSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end update()

    static findAll() {
        const response = new Response();
        const findAllSql = `
            SELECT * FROM payments WHERE 1;
        `;

        return new Promise((resolve, reject) => {
            db.query(findAllSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end findAll()

    static find(id) {
        const response = new Response();
        const findSql = `
            SELECT * FROM payments WHERE id = '${id}';
        `;

        return new Promise((resolve, reject) => {
            db.query(findSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, error.sqlMessage, error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end find()
} //end class

module.exports = Payment;
