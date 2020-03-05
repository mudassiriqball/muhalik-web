// const express = require("express");
// const router = express.Router();
// const checkAuth = require('../middleware/check-auth');

// const productController = require('../controllers/products.controllers');

// router.get("/", productController.getAll);
// router.get("/time", productController.getDate);
// router.post("/add", productController.addProduct);
// router.post("/bulk-upload", productController.bulkupload);
// router.put("/:_id", checkAuth, productController.updateProduct);
// router.delete("/:_id", checkAuth, productController.deleteProduct);

// module.exports = router;

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controllers');

router.get("/", productController.getAll);
router.get("/time", productController.getDate);
router.post("/add", checkAuth, productController.addProduct);
//router.post("/bulk_upload", productController.bulkupload);
router.put("/:_id", checkAuth, productController.updateProduct);
router.delete("/:_id", checkAuth, productController.deleteProduct);

module.exports = router;