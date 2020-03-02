const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const product_categoryController = require('../controllers/products-categories.controllers');

router.post("/add-category",product_categoryController.addProduct_Category);
router.get("/get-all", product_categoryController.getAll);

module.exports = router;