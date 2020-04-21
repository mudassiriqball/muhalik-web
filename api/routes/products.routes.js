const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controllers');

router.get("/", productController.getAll);
router.get("/total-products", productController.get_total_products);
router.get("/total-Sold", productController.get_total_sold);
router.get("/all", checkAuth, productController.geteverything);
//router.get("/all", productController.get_decoded_token);

router.post("/add", productController.addProduct);
//router.post("/bulk_upload", productController.bulkupload);
router.put("/:_id", checkAuth, productController.updateProduct);
router.delete("/:_id", checkAuth, productController.deleteProduct);

module.exports = router;