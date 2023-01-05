const Users = require("../db/models/Users");

module.exports = {
    getUsers(req, res) {
        const paymentRes = Payment.findAll().then((response) => {
            res.send(response.getResponse("getPayments"));
        });
    },
    getUser(req, res) {
        const id = req.params.id;

        const paymentRes = Payment.find(id).then((response) => {
            res.send(response.getResponse("getPayments"));
        });
    },
    createUser(req, res) {
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const role = req.body.role;
        const password = req.body.password;
        const users = new Users(name, surname, email, role, password);

        const userRes = users.save().then((response) => {
            res.send(response.getResponse("createUser"));
        });
    },
    updateUser(req, res) {
        const title = req.body.title;
        const total = req.body.total;
        const id = req.params.id;
        const payment = new Payment(title, total);

        const paymentRes = payment.update(id).then((response) => {
            res.send(response.getResponse("updatePayment"));
        });
    },
    deleteUser(req, res) {
        const payment = new Payment();
        const id = req.params.id;

        const paymentRes = payment.delete(id).then((response) => {
            res.send(response.getResponse("deletePayment"));
        });
    },
};
