const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controller');

// post Requests
router.post("/add", checkAuth, productController.addProduct);
//router.post("/bulk_upload", productController.bulkupload);

// get Requests
router.get("/get", productController.get_products);
router.get("/product/:_id", productController.get_product_by_id);
router.get("/", productController.get_all_products);
router.get("/vendor/:_id", productController.get_vendor_products);
// router.get("/search-vendor-products/:_id", productController.get_search_in_vendor_products);
router.get("/total-products", productController.get_total_products);
router.get("/total-Sold", productController.get_total_sold);
router.get("/all", productController.geteverything);
//router.get("/all", productController.get_decoded_token);
// 
// put Requests
router.put("/review-rating", checkAuth, productController.add_rating_and_review);
router.put("/delete/:_id", checkAuth, productController.deleteProduct);
//router.put("/:_id", checkAuth, productController.updateProduct);

module.exports = router;