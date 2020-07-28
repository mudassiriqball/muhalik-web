// const express = require("express");
// const router = express.Router();
// const checkAuth = require('../middleware/check-auth');
// const productController = require('../controllers/products.controller');

// // post Requests
// router.post("/add",checkAuth, productController.addProduct);
// //router.post("/bulk_upload", productController.bulkupload);

// // get Requests
// router.get("/get", productController.get_products);
// router.get("/product/:_id", productController.get_product_by_id);
// router.get("/", productController.get_all_products);
// router.get("/vendor/:_id", productController.get_vendor_products);
// router.get("/all/:_id", productController.geteverything);
// router.get("/vendor/query-search/:_id", productController.get_vendor_product_query_search);
// // router.get("/all", productController.get_decoded_token);
// // router.get("/total-products", productController.get_total_products);
// // router.get("/total-Sold", productController.get_total_sold);

// // put Requests
// router.put("/review-rating",checkAuth, productController.add_rating_and_review);
// router.put("/delete/:_id",checkAuth, productController.deleteProduct);
// //router.put("/:_id", checkAuth, productController.updateProduct);

// module.exports = router;


const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controller');

// post Requests
router.post("/add-product", checkAuth, productController.addProduct);
//router.post("/bulk_upload", productController.bulkupload);

// get Requests
router.get("/all-products", productController.get_all_products);
router.get("/all-products-query-search", productController.get_products);


router.get("/product-by-id/:_id", productController.get_product_by_id);
router.get("/any/product-by-id/:_id", productController.get_all_product_by_id);


router.get("/user-products/:_id", productController.get_vendor_products);
router.get("/user-products-query-search/:_id", productController.get_vendor_product_query_search);

router.get("/products-all-count/:_id", productController.geteverything);

// put Requests
router.put("/review-rating", checkAuth, productController.add_rating_and_review);
router.put("/delete-product/:_id", checkAuth, productController.deleteProduct);

module.exports = router;