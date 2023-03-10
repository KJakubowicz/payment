const db = require("../Mysql");
const Response = require("../../controllers/ResponseController");
const UsersValidator = require("../../validators/UsersValidator");
const DateHelper = require("../../helpers/DateHelper");
const BasicModel = require("../models/Basis");

class Users extends BasicModel {
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

        if ((await usersValidator.email(this.email)) === false) {
            response.setData(
                false,
                "e-mail is incorrect or already exists",
                409,
                []
            );
            return response;
        }

        const createdAtDate = DateHelper.getActualSqlDate();
        const insertSql = `
            INSERT INTO users
                (name, surname, email, password, role, created_at) 
            VALUES 
                ('${this.name}', '${this.surname}', '${this.email}', '${this.password}', '${this.role}', '${createdAtDate}')
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
        const usersValidator = new UsersValidator();
        // TODO - if you need to write comment, make it in english
        // Podczas sprawdzania nie może sprawdzać, czy email istnieje biorąc pod uwagę swój własny adres
        if ((await usersValidator.email(this.email)) === false) {
            response.setData(
                false,
                "e-mail is incorrect or already exists",
                409,
                []
            );
            return response;
        }

        const createdAtDate = DateHelper.getActualSqlDate();
        const sql = `
            UPDATE users
            SET
                name = '${this.name}',
                surname ='${this.surname}',
                email = '${this.email}',
                password = '${this.password}',
                role ='${this.role}',
                created_at = '${createdAtDate}'
            WHERE 
                id = '${id}'
        `;

        return this.call({ response, sql });
    } //end update()

    // DRY - optimisation
    // async call({ sql, response }) {
    //     return new Promise((resolve) => {
    //         db.query(sql, function (error, results) {
    //             if (error) {
    //                 response.setData(false, error.sqlMessage, error.code, []);
    //             } else {
    //                 response.setData(true, "", "", results);
    //             }

    //             resolve(response);
    //         });
    //     });
    // }

    async delete(id) {
        const response = new Response();
        const sql = `
            DELETE FROM users
            WHERE 
                id = '${id}'
        `;

        return this.call({ response, sql });
    } //end update()

    static findAll() {
        const response = new Response();
        const findAllSql = `
            SELECT * FROM users WHERE 1;
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

    // static find(id) {
    //     const response = new Response();
    //     const findSql = `
    //         SELECT * FROM users WHERE id = '${id}';
    //     `;

    //     return new Promise((resolve, reject) => {
    //         db.query(findSql, function (error, results, fields) {
    //             if (error) {
    //                 response.setData(false, error.sqlMessage, error.code, []);
    //             } else {
    //                 response.setData(true, "", "", results);
    //             }

    //             resolve(response);
    //         });
    //     });
    // } //end find()
} //end class

module.exports = Users;
