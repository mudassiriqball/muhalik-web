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
router.get("/cart/:_id", UserController.get_cart); 
router.get("/users-count",UserController.get_total_specific_users);
router.get("/query-search/:_role",UserController.get_users_by_query)
// router.get("/:_id",UserController.getSingleUser);

// put Requests
router.put("/status/:_id",checkAuth, UserController.update_status); 
router.put("/reset-password/:_id", UserController.reset_password);
router.put("/cart/:_id",checkAuth, UserController.add_to_cart);

// router.put("/:_id", UserController.updateUser);

// delete Requests
router.delete("/:_id",checkAuth, UserController.deleteUser);
router.delete("/cart/:_id",checkAuth, UserController.deleteCartData);

module.exports = router;