// const express = require("express");
// const router = express.Router();
// const checkAuth = require('../middleware/check-auth');
// const sliderController = require('../controllers/slider.controller');

// // post Requests
// router.post("/",checkAuth, sliderController.add_slider);

// // get Requests
// router.get("/", sliderController.get_slider);

// // put Requests
// router.put("/:_id", checkAuth,sliderController.update_slider);

// // delete Requests
// router.delete("/:_id",checkAuth, sliderController.delete_slider);

// module.exports = router;


const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const sliderController = require('../controllers/slider.controller');

// post Requests
router.post("/add-slider", checkAuth, sliderController.add_slider);

// get Requests
router.get("/sliders", sliderController.get_slider);

// put Requests
router.put("/slider/:_id", checkAuth, sliderController.update_slider);

// delete Requests
router.delete("/slider/:_id", checkAuth, sliderController.delete_slider);

module.exports = router;