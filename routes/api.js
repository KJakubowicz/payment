const express = require("express");
const router = express.Router();

const paymentsController = require("../controllers/PaymentController");
const usersController = require("../controllers/UsersController");
const friendsController = require("../controllers/FriendsController");

// PAYMENTS
router.get("/payments", paymentsController.getPayments);
router.get("/payment/:id", paymentsController.getPayment);
router.post("/create/payment", paymentsController.createPayment);
router.put("/payment/:id", paymentsController.updatePayment);
router.delete("/payment/:id", paymentsController.deletePayment);

// USERS MANAGMENT
router.get("/users", usersController.getUsers);
router.get("/user/:id", usersController.getUser);
router.post("/create/user", usersController.createUser);
router.put("/user/:id", usersController.updateUser);
router.delete("/user/:id", usersController.deleteUser);

// FRIENDS
router.get("/friends/:id", friendsController.getFirends);
router.get("/friend/:id/:id_friend", friendsController.getFirend);
router.post("/add/friend", friendsController.addFirend);
router.put("/friend/accept/:id", friendsController.acceptFirend);
router.delete("/user/:id", friendsController.deleteFirend);

module.exports = router;
