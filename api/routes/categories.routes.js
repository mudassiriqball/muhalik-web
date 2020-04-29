const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const categoriesController = require('../controllers/categories.controller');

router.post("/category", categoriesController.add_category);
router.post("/field", categoriesController.add_field);
router.post("/field-request", categoriesController.add_field_request);
router.post("/tag", categoriesController.add_tag);

router.get("/categories", categoriesController.get_categories);
router.get("/fields", categoriesController.get_fields);
router.get("/field-requests", categoriesController.get_field_requests);
router.get("/tags", categoriesController.get_tags);

// router.put("/category", categoriesController.update_categorie);
// router.put("/field", categoriesController.update_field);
// router.put("/field-request", categoriesController.update_field_request);
// router.put("/tag", categoriesController.update_tag);

// router.delete("/category", categoriesController.delete_category);
// router.delete("/field", categoriesController.delete_field);
// router.delete("/field-request", categoriesController.delete_field_request);
// router.delete("/tag", categoriesController.delete_tag);


module.exports = router;
