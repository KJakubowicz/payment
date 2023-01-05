const express = require("express");
const router = express.Router();

const paymentsController = require("../controllers/paymentController");
const usersController = require("../controllers/usersController");

router.get("/payments", paymentsController.getPayments);
router.get("/payment/:id", paymentsController.getPayment);
router.post("/create/payment", paymentsController.createPayment);
router.put("/payment/:id", paymentsController.updatePayment);
router.delete("/payment/:id", paymentsController.deletePayment);

// USERS MANAGMENT
router.get("/create/user", usersController.createUser);

module.exports = router;
