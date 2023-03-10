const Payment = require("../db/models/Payment");
const Response = require("./ResponseController");

module.exports = {
    getPayments(req, res) {
        Payment.findAll().then((response) => {
            res.send(response.getResponse("getPayments"));
        });
    },
    getPayment(req, res) {
        const id = req.params.id;

        Payment.find(id).then((response) => {
            res.send(response.getResponse("getPayments"));
        });
    },
    createPayment(req, res) {
        const title = req.body.title;
        const total = req.body.total;
        const userId = req.body.user_id;
        const payment = new Payment(title, total, userId);

        payment.save().then((response) => {
            res.send(response.getResponse("createPayment"));
        });
    },
    updatePayment(req, res) {
        const title = req.body.title;
        const total = req.body.total;
        const id = req.params.id;
        const payment = new Payment(title, total);

        payment.update(id).then((response) => {
            res.send(response.getResponse("updatePayment"));
        });
    },
    deletePayment(req, res) {
        const payment = new Payment();
        const id = req.params.id;

        payment.delete(id).then((response) => {
            res.send(response.getResponse("deletePayment"));
        });
    },
};
