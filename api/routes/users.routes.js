const express = require("express");
const router = express.Router();

const UserController = require('../controllers/users.controllers');
const checkAuth = require('../middleware/check-auth');

router.get("/", UserController.getAll);
router.get("/:_id", UserController.get_user_by_id);
router.get("/check-mobile/:_mobile", UserController.check_mobile);
router.put("/reset-password/:_id", UserController.reset_password);
router.get("/customers", UserController.get_customers);
router.get("/vendors", UserController.get_vendors);
router.get("/admins", UserController.get_admins);
router.get("/restricted-vendors", UserController.get_restricted_vendors);
router.get("/restricted-customers", UserController.get_restricted_customers);
router.get("/new-vendors", UserController.get_new_vendors);


// router.put("/add-wish/:_id", checkAuth, UserController.add_to_wishlist);
// router.put("/remove-wish/:_id", checkAuth, UserController.remove_from_wishlist);
// router.put("/add-cart/:_id", checkAuth, UserController.add_to_cart);
// router.put("/remove-cart/:_id", checkAuth, UserController.remove_from_cart);


router.put("/status/:_id", checkAuth, UserController.update_status);
router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);
// router.get("/:_id",UserController.getSingleUser);
// router.post("/",UserController.addUser);
router.put("/:_id", UserController.updateUser);
router.delete("/:_id", UserController.deleteUser);

router.post("/avatar", checkAuth, UserController.set_avatar);



module.exports = router;