const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const categoriesController = require('../controllers/categories.controller');

router.post("/add-category", categoriesController.add_category);
router.post("/add-field", categoriesController.add_fields);
router.post("/add-tag", categoriesController.add_tags);

router.get("/categories", categoriesController.get_categories);
router.get("/fields", categoriesController.get_fields);
router.get("/tags", categoriesController.get_tags);

router.post("/add-field-request", categoriesController.add_field_request);
router.get("/get-field-requests", categoriesController.get_field_requests);

module.exports = router;
