const Users = require("../db/models/Users");
const Helper = require("../helpers/UsersHelper");
module.exports = {
    getUsers(req, res) {
        const urserRes = Users.findAll().then((response) => {
            res.send(response.getResponse("getUsers"));
        });
    },
    getUser(req, res) {
        const id = req.params.id;

        const urserRes = Users.find(id).then((response) => {
            res.send(response.getResponse("getUsers"));
        });
    },
    createUser(req, res) {
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const role = req.body.role;
        const password = Helper.hashPassword(req.body.password, 1000, 16);
        const users = new Users(name, surname, email, role, password);

        const userRes = users.save().then((response) => {
            res.send(response.getResponse("createUser"));
        });
    },
    updateUser(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const role = req.body.role;
        const password = Helper.hashPassword(req.body.password, 1000, 16);
        const users = new Users(name, surname, email, role, password);

        const userRes = users.update(id).then((response) => {
            res.send(response.getResponse("updateUser"));
        });
    },
    deleteUser(req, res) {
        const users = new Users();
        const id = req.params.id;

        const userRes = users.delete(id).then((response) => {
            res.send(response.getResponse("deleteUser"));
        });
    },
};
