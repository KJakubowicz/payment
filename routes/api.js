const express = require("express");
const router = express.Router();

const paymentsController = require("../controllers/paymentController");

router.get("/payments", paymentsController.getPayments);
router.get("/payment/:id", paymentsController.getPayment);
router.post("/create/payment", paymentsController.createPayment);
router.put("/payment/:id", paymentsController.updatePayment);
router.delete("/payment/:id", paymentsController.deletePayment);

module.exports = router;
