
const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controller');


//router.get("/get-products", productController.get_products);
router.get("/", productController.get_all_products);
router.get("/:id", productController.get_vendor_products);

router.get("/total-products", productController.get_total_products);
router.get("/total-Sold", productController.get_total_sold);
router.get("/all", productController.geteverything);
//router.get("/all", productController.get_decoded_token);

router.post("/add", productController.addProduct);

//router.post("/bulk_upload", productController.bulkupload);
// router.put("/:_id", checkAuth, productController.updateProduct);
router.put("/delete-product", productController.deleteProduct);

module.exports = router;