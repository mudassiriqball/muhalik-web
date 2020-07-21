const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ordersController = require('../controllers/orders.controller');

// post Requests
router.post("/:_id", checkAuth, ordersController.place_order);

// get Requests
router.get("/:_status", ordersController.get_all_orders);
router.get("/vendor/:_id", ordersController.get_vendors_orders);

router.get("/query-search/:_status", ordersController.get_all_query_search_orders);

//params status
// query field 
// query q
// query page
// query limit

// router.get("/order-count/:_id", ordersController.get_all_orders_count);

// router.get("/vendor/query-search/:_id", ordersController.get_vendor_query_search_orders);
// router.get("/vendor/order-count/:_id", ordersController.get_vendor_orders_count);


// Update Requests

// Delete Requests

module.exports = router;