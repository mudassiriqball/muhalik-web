const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users.controller');
const checkAuth = require('../middleware/check-auth');

// post Requests
router.post("/login",UserController.loginUser);
router.post("/register",UserController.registerUser);
router.post("/avatar",checkAuth,UserController.set_avatar);
// router.post("/",UserController.addUser);

// get Requests
router.get("/", UserController.getAll);
router.get("/user/:_id", UserController.get_user);
router.get("/check-mobile/:_mobile", UserController.check_mobile);
router.get("/admins", UserController.get_admins);
router.get("/new-vendors", UserController.get_new_vendors);
router.get("/vendors", UserController.get_vendors);
router.get("/restricted-vendors", UserController.get_restricted_vendors); 
router.get("/customers", UserController.get_customers);
router.get("/restricted-customers", UserController.get_restricted_customers); 
// router.get("/:_id",UserController.getSingleUser);

// put Requests
router.put("/status/:_id",checkAuth, UserController.update_status); 
router.put("/reset-password/:_id", UserController.reset_password);
// router.put("/:_id", UserController.updateUser);

// delete Requests
router.delete("/:_id",checkAuth, UserController.deleteUser);

module.exports = router;