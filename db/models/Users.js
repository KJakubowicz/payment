const db = require("../mysql");
const Response = require("../../controllers/responseController");
const UsersValidator = require("../../validators/UsersValidator");

class Users {
    constructor(name, surname, email, role, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
    } //end constructor()

    async save() {
        const response = new Response();
        const usersValidator = new UsersValidator();
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const createdAtDate = `${year}-${month}-${day}`;
        const insertSql = `
            INSERT INTO users
                (name, surname, email, password, role, created_at) 
            VALUES 
                ('${this.name}', '${this.surname}', '${this.email}', '${this.password}', '${this.role}', '${createdAtDate}')
        `;

        if ((await usersValidator.email(this.email)) === false) {
            response.setData(
                false,
                "e-mail is incorrect or already exists",
                409,
                []
            );
            return response;
        }

        return new Promise((resolve, reject) => {
            db.query(insertSql, function (error, results, fields) {
                if (error) {
                    response.setData(false, "error_message", error.code, []);
                } else {
                    response.setData(true, "", "", results);
                }

                resolve(response);
            });
        });
    } //end save()

    async update(id) {
        const response = new Response();
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
                if (error) {
                    response.setData(false, "error_message", error.code, []);
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
                    response.setData(false, "error_message", error.code, []);
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
                    response.setData(false, "error_message", error.code, []);
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

module.exports = Users;
