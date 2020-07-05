const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const sliderController = require('../controllers/slider.controller');

router.post("/", sliderController.add_slider);
router.get("/", sliderController.get_slider);
// router.put("/", sliderController.update_slider);
// router.delete("/", sliderController.delete_slider);

module.exports = router;