// const express = require("express");
// const router = express.Router();
// const checkAuth = require('../middleware/check-auth');
// const productController = require('../controllers/products.controller');

// // post Requests 
// router.post("/add-product", checkAuth, productController.addProduct);
// //router.post("/bulk_upload", productController.bulkupload);

// // get Requests
// router.get("/all-products", productController.get_all_products);
// router.get("/admin-products-query-search", productController.get_admin_products);

// router.get("/all-products-query-search", productController.get_customer_side_products);

// router.get("/product-by-id/:_id", productController.get_product_by_id);
// router.get("/any/product-by-id/:_id", productController.get_all_product_by_id);

// router.get("/user-products/:_id", productController.get_vendor_products);
// router.get("/user-products-query-search/:_id", productController.get_vendor_product_query_search);

// router.get("/products-all-count/:_id", productController.geteverything);
// router.get("/search/abc", productController.get_search_products);

// router.get("/less-stock/:_id", productController.get_less_stock_products);
// router.get("/vendor-search-less-stock/:_id", productController.get_vendor_product_less_stock_by_id);

// // put Requests
// router.put("/review-rating", checkAuth, productController.add_rating_and_review);
// router.put("/delete-product/:_id", checkAuth, productController.deleteProduct);

// module.exports = router;

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const productController = require('../controllers/products.controller');

// post Requests 
router.post("/add-product", checkAuth, productController.addProduct);
router.post("/aaa/bbb/ccc", productController.aaabbbcccProduct);
//router.post("/bulk_upload", productController.bulkupload);

// get Requests
router.get("/all-products", productController.get_all_products);
router.get("/admin-products-query-search", productController.get_admin_products);

router.get("/all-products-query-search", productController.get_customer_side_products);

router.get("/product-by-id/:_id", productController.get_product_by_id);
router.get("/any/product-by-id/:_id", productController.get_all_product_by_id);

router.get("/user-products/:_id", productController.get_vendor_products);
router.get("/user-products-query-search/:_id", productController.get_vendor_product_query_search);

router.get("/products-all-count/:_id", productController.geteverything);
router.get("/search/abc", productController.get_search_products);

router.get("/less-stock/:_id", productController.get_less_stock_products);
router.get("/vendor-search-less-stock/:_id", productController.get_vendor_product_less_stock_by_id);

// put Requests
router.put("/review-rating", checkAuth, productController.add_rating_and_review);
router.put("/delete-product/:_id", checkAuth, productController.deleteProduct);

module.exports = router;