const Friends = require("../db/models/Friends");

const MysqlParser = require("../parsers/db/mysql");
const Table = { name: "friends" };
module.exports = {
    async getFirends({ params: { id } }, res) {
        const response = await Friends.findFriends(id);
        res.send(response.getResponse(MysqlParser.methods.getFriends));
    },

    async getFirend({ params: { id, id_friend } }, res) {
        const response = await Friends.findFriend({
            id: id,
            id_friend: id_friend,
        });
        res.send(response.getResponse(MysqlParser.methods.getFriends));
    },

    async addFirend({ body: { name, surname, email, role, password } }, res) {
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
    acceptFirend(req, res) {
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
    deleteFirend(req, res) {
        const users = new Users();
        const id = req.params.id;

        users.delete(id).then((response) => {
            res.send(response.getResponse("deleteUser"));
        });
    },
};
