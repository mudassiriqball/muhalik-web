const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ordersController = require('../controllers/orders.controller');

// post Requests
router.post("/:_id", checkAuth, ordersController.place_order);

// get Requests 
router.get("/order-count", ordersController.get_all_orders_count);
router.get("/vendor/order-count/:_id", ordersController.get_vendor_orders_count);

router.get("/:_status", ordersController.get_all_orders);
router.get("/vendor/:_id", ordersController.get_vendors_orders);

router.get("/query-search/:_status", ordersController.get_all_query_search_orders);
router.get("/vendor/query-search/:_id", ordersController.get_vendor_query_search_orders);



// Update Requests
router.put("/:_id", ordersController.update_status);

// Delete Requests

module.exports = router;