// const express = require("express");
// const router = express.Router();

// const UserController = require('../controllers/users.controller');
// const checkAuth = require('../middleware/check-auth');

// // // Get Requests
// // router.get("/customers", UserController.get_customers);
// // // The restricted vender is a vendor which is blocked by admin:
// // router.get("/restricted-customers", UserController.get_restricted_customers);

// // router.get("/vendors", UserController.get_vendors);
// // router.get("/new-vendors", UserController.get_new_vendors);
// // // The restricted customer is a vendor which is blocked by admin:
// // router.get("/restricted-vendors", UserController.get_restricted_vendors); 

// // router.get("/admins", UserController.get_admins);

// router.get("/:_id", UserController.getSingleUser);

// // Post Requests
// router.post("/login", UserController.loginUser);
// router.post("/register", UserController.registerUser);

// // Update Requests
// router.put("/:_id", UserController.updateUser);

// // Delete Requests
// router.delete("/:_id", UserController.deleteUser);

// module.exports = router;





const express = require("express");
const router = express.Router();

const UserController = require('../controllers/users.controller');
const checkAuth = require('../middleware/check-auth');

router.get("/", UserController.getAll);
router.get("/customers", UserController.get_customers);
router.get("/vendors", UserController.get_vendors);
router.get("/admins", UserController.get_admins);
router.get("/restricted-vendors", UserController.get_restricted_vendors);
router.get("/new-vendors", UserController.get_new_vendors);
router.get("/:_id", UserController.getSingleUser);

router.post("/login", checkAuth, UserController.loginUser);
router.post("/register", UserController.registerUser);
router.post("/set-profile", checkAuth, UserController.set_avatar);

router.put("/:_id", checkAuth, UserController.restricted_user);
router.put("/:_id", checkAuth, UserController.updateUser);

router.delete("/:_id", checkAuth, UserController.deleteUser);

module.exports = router;