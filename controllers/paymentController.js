const Payment = require("../db/models/payment");
const Response = require("../controllers/responseController");

module.exports = {
    getPayments(req, res) {
        const response = new Response();

        const paymentRes = Payment.findAll().then((result) => {
            res.send(response.success(result, "getPayments"));
        });
    },
    getPayment(req, res) {
        const response = new Response();
        const id = req.params.id;

        const paymentRes = Payment.find(id).then((result) => {
            res.send(response.success(result, "getPayments"));
        });
    },
    createPayment(req, res) {
        const title = req.body.title;
        const total = req.body.total;
        const payment = new Payment(title, total);
        const response = new Response();

        const paymentRes = payment.save().then((result) => {
            res.send(response.success(result, "createPayment"));
        });
    },
    updatePayment(req, res) {
        const title = req.body.title;
        const total = req.body.total;
        const id = req.params.id;
        const payment = new Payment(title, total);
        const response = new Response();

        const paymentRes = payment.update(id).then((result) => {
            res.send(response.success(result, "updatePayment"));
        });
    },
    deletePayment(req, res) {
        const payment = new Payment();
        const response = new Response();
        const id = req.params.id;

        const paymentRes = payment.delete(id).then((result) => {
            res.send(response.success(result, "deletePayment"));
        });
    },
};
