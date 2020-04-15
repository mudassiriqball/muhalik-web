const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const custom_field_controller = require('../controllers/custom_field_categories.controllers');

router.post("/add-category", custom_field_controller.add_custom_field_category);
router.get("/all-categories", custom_field_controller.getAll);

module.exports = router;