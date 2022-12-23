const express = require("express");
const router  = express.Router();

const paymentsController = require('../controllers/paymentController');

router.get('/', paymentsController.createPayment);

module.exports = router;