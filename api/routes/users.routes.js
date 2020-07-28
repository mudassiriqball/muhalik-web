// const express = require("express");
// const router = express.Router();
// const UserController = require('../controllers/users.controller');
// const checkAuth = require('../middleware/check-auth');
// // const accessControll =require('../middleware/access-controls');

// // post Requests
// router.post("/login",UserController.loginUser);
// router.post("/register",UserController.registerUser);

// // router.post("/",UserController.addUser);

// // get Requests
// router.get("/", UserController.getAll);
// router.get("/user/:_id", UserController.get_user);
// router.get("/check-mobile/:_mobile", UserController.check_mobile);
// router.get("/admins", UserController.get_admins);
// router.get("/new-vendors", UserController.get_new_vendors);
// router.get("/vendors", UserController.get_vendors);
// router.get("/restricted-vendors", UserController.get_restricted_vendors); 
// router.get("/customers", UserController.get_customers);
// router.get("/restricted-customers", UserController.get_restricted_customers); 
// router.get("/cart/:_id", UserController.get_cart); 
// router.get("/users-count",UserController.get_total_specific_users);
// router.get("/query-search/:_role",UserController.get_users_by_query)
// // router.get("/:_id",UserController.getSingleUser);

// // put Requests
// router.put("/avatar/:_id",UserController.set_avatar);
// router.put("/status/:_id",checkAuth, UserController.update_status); 
// router.put("/reset-password/:_id", UserController.reset_password);
// router.put("/cart/:_id",checkAuth, UserController.add_to_cart);
// router.put("/clear-cart/:_id",UserController.delete_cart);
// router.put("/edit/profile/:_id",UserController.update_profile);
// // router.put("/:_id", UserController.updateUser);

// // delete Requests
// router.delete("/:_id",checkAuth, UserController.deleteUser);
// router.delete("/cart/:_id",checkAuth, UserController.deleteCartData);


// module.exports = router;




const express = require("express");
const router = express.Router();
const UserController = require('../controllers/users.controller');
const checkAuth = require('../middleware/check-auth');

// post Requests
router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);

// router.post("/",UserController.addUser);

// get Requests
router.get("/all-users", UserController.getAll);
router.get("/user-by-id/:_id", UserController.get_user);
router.get("/check-mobile/:_mobile", UserController.check_mobile);
router.get("/admins", UserController.get_admins);
router.get("/new-vendors", UserController.get_new_vendors);
router.get("/vendors", UserController.get_vendors);
router.get("/restricted-vendors", UserController.get_restricted_vendors);
router.get("/customers", UserController.get_customers);
router.get("/restricted-customers", UserController.get_restricted_customers);
router.get("/cart/:_id", UserController.get_cart);
router.get("/users-count", UserController.get_total_specific_users);
router.get("/users-query-search/:_role", UserController.get_users_by_query)
// router.get("/:_id",UserController.getSingleUser);

// put Requests
router.put("/user-avatar/:_id", checkAuth, UserController.set_avatar);
router.put("/user-status/:_id", checkAuth, UserController.update_status);
router.put("/reset-password/:_id", UserController.reset_password);
router.put("/add-to-cart/:_id", checkAuth, UserController.add_to_cart);
router.put("/clear-cart-data-by-id/:_id", UserController.deleteCartData);
router.put("/user-profile/:_id", UserController.update_profile);
// router.put("/:_id", UserController.updateUser);

// delete Requests
router.delete("/user/:_id", checkAuth, UserController.deleteUser);
router.delete("/clear-cart/:_id", checkAuth, UserController.delete_cart);


module.exports = router;