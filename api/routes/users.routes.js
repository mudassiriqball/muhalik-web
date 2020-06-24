// const express = require("express");
// const router = express.Router();

// const UserController = require('../controllers/users.controller');
// const checkAuth = require('../middleware/check-auth');

// router.get("/", UserController.getAll);
// router.get("/admins", UserController.get_admins);

// router.get("/vendors", UserController.get_vendors);
// router.get("/restricted-vendors", UserController.get_restricted_vendors);
// router.get("/new-vendors", UserController.get_new_vendors);

// router.get("/customers", UserController.get_customers);
// router.get("/restricted-customers", UserController.get_restricted_customers);

// router.get("/:_id", UserController.getSingleUser);

// router.post("/login", UserController.loginUser);
// router.post("/register", UserController.registerUser);
// router.post("/avatar", checkAuth, UserController.set_avatar);

// router.put("/status/:_id", checkAuth, UserController.update_status);
// router.put("/:_id", checkAuth, UserController.updateUser);

// router.delete("/:_id", checkAuth, UserController.deleteUser);

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
router.get("/restricted-customers", UserController.get_restricted_customers);
router.get("/new-vendors", UserController.get_new_vendors);

router.put("/status/:_id", checkAuth, UserController.update_status);
router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);
router.get("/:_id", UserController.getSingleUser);
// router.post("/",UserController.addUser);
router.put("/:_id", UserController.updateUser);
router.delete("/:_id", UserController.deleteUser);

router.post("/avatar", checkAuth, UserController.set_avatar);

module.exports = router;