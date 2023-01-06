const Users = require("../db/models/Users");
const Helper = require("../helpers/UsersHelper");
const MysqlParser = require("../parsers/db/mysql");
const Table = { name: "users" };
module.exports = {
    async getUsers(req, res) {
        const response = await Users.findAll({ table: Table.name });
        res.send(response.getResponse(MysqlParser.methods.getUsers));
    },

    async getUser({ params: { id } }, res) {
        const response = await Users.find({ table: Table.name, id: id });
        res.send(response.getResponse(MysqlParser.methods.getUsers));
    },

    async createUser({ body: { name, surname, email, role, password } }, res) {
        const pass = Helper.hashPassword(password, 1000, 16);
        const response = await new Users(
            name,
            surname,
            email,
            role,
            pass
        ).save();

        res.send(response.getResponse(MysqlParser.methods.createUser));
    },
    updateUser(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const role = req.body.role;
        const password = Helper.hashPassword(req.body.password, 1000, 16);
        const users = new Users(name, surname, email, role, password);

        users.update(id).then((response) => {
            res.send(response.getResponse("updateUser"));
        });
    },
    deleteUser(req, res) {
        const users = new Users();
        const id = req.params.id;

        users.delete(id).then((response) => {
            res.send(response.getResponse("deleteUser"));
        });
    },
};
