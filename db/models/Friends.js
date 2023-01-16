const db = require("../Mysql");
const Response = require("../../controllers/ResponseController");
const DateHelper = require("../../helpers/DateHelper");
const BasicModel = require("./Basis");
const CallHelper = require("../../helpers/CallHelper");
const FriendsValidator = require("../../validators/FriendsValidator");

class Friends extends BasicModel {
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

        return CallHelper.call({ response, sql });
    } //end update()

    async delete(id) {
        const response = new Response();
        const sql = `
            DELETE FROM users
            WHERE 
                id = '${id}'
        `;

        return this.call({ response, sql });
    } //end update()

    static findFriends(id) {
        const response = new Response();
        const sql = `
            SELECT * FROM friends 
            WHERE 
                id_user = '${id}'
                AND accepted = 1;
        `;

        return CallHelper.call({ sql, response });
    } //end findFriends()

    static async findFriend(params) {
        const response = new Response();
        const friendsValidator = new FriendsValidator();

        if ((await friendsValidator.relationship(params)) === false) {
            response.setData(
                false,
                "relationship or user doesn't exists",
                409,
                []
            );
            return response;
        }

        const sql = `
            SELECT * FROM friends 
            WHERE 
                id_user = '${id}'
                AND accepted = 1;
        `;

        return CallHelper.call({ response, sql });
    } //end findFriends()
} //end class

module.exports = Friends;
