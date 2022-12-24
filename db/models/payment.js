const db = require("../mysql");

class Payment {
    constructor(title, total) {
        this.title = title;
        this.total = total;
    } //end constructor()

    async save() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const createdAtDate = `${year}-${month}-${day}`;
        const insertSql = `
            INSERT INTO payments
                (title, total, created_at) 
            VALUES 
                ('${this.title}', '${this.total}', '${createdAtDate}')
        `;

        return new Promise((resolve, reject) => {
            db.query(insertSql, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    } //end save()

    async update(id) {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const createdAtDate = `${year}-${month}-${day}`;
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
                if (error) throw error;
                resolve(results);
            });
        });
    } //end update()

    async delete(id) {
        const deleteSql = `
            DELETE FROM payments
            WHERE 
                id = '${id}'
        `;

        return new Promise((resolve, reject) => {
            db.query(deleteSql, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    } //end update()

    static findAll() {
        const findAllSql = `
            SELECT * FROM payments WHERE 1;
        `;

        return new Promise((resolve, reject) => {
            db.query(findAllSql, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    } //end findAll()

    static find(id) {
        const findSql = `
            SELECT * FROM payments WHERE id = '${id}';
        `;

        return new Promise((resolve, reject) => {
            db.query(findSql, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
    } //end find()
} //end class

module.exports = Payment;
