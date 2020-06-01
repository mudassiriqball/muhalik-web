const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const categoriesController = require('../controllers/categories.controller');

// Post Requests
router.post("/category", categoriesController.add_category);
router.post("/field", categoriesController.add_field);

router.post("/field-request", checkAuth, categoriesController.add_field_request);

// Get Requests
router.get("/categories", categoriesController.get_categories);
router.get("/fields", categoriesController.get_fields);
router.get("/field-requests", categoriesController.get_field_requests);
router.get("/tags", categoriesController.get_tags);

// Update Requests
// router.put("/category/:_id", categoriesController.update_category);
// router.put("/sub-category/:_id", categoriesController.update_sub_category);
// router.put("/field/:_id", categoriesController.update_field);

//  Delete Requests
// router.delete("/sub-category/_id", categoriesController.delete_sub_category);
// router.delete("/field/_id", categoriesController.delete_field);
// router.delete("/field-request/_id", categoriesController.delete_field_request);

module.exports = router;
