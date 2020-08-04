const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ordersController = require('../controllers/orders.controller');

// post Requests
router.post("/place-order/:_id", checkAuth, ordersController.place_order);

// get Requests
router.get("/all-orders-count", ordersController.get_all_orders_count);
router.get("/user-orders-count/:_id", ordersController.get_vendor_orders_count);
router.get("/abc/abc/customer-orders-count/:_id", ordersController.get_customer_orders_count);


router.get("/all-orders/:_status", ordersController.get_all_orders);
router.get("/vendor-orders/:_id", ordersController.get_vendors_orders);

router.get("/all-orders-query-search/:_status", ordersController.get_all_query_search_orders); // check
router.get("/vendor-orders-query-search/:_id", ordersController.get_vendor_query_search_orders);// check

router.get("/customer-orders/:_id", ordersController.get_customer_orders);

// Update Requests  
router.put("/user-order-status/:_id", ordersController.update_status);

// Delete Requests

module.exports = router;