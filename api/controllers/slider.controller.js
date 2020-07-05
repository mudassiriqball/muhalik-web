const sliderController = {};
const Slider = require("../models/slider.model");
var cloudinary = require('../../src/sdk/custom/cloudinary');
const fs = require("fs");

sliderController.add_slider = async (req, res) => {
  const uploader = async (path) =>
    await cloudinary.uploads(path, "Slider-Images");
  const imagepath = req.files[0].path;
  const newPath = await uploader(imagepath);
  fs.unlinkSync(imagepath);

  const body = req.body;

  try {
    var datetime = new Date();
    body.entry_date = datetime;
    body.url = newPath.url;
    console.log("1", body);
    const slider = new Slider(body);
    const result = await slider.save();
    res.status(200).send({
      code: 200,
      message: "Slider Added Successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

sliderController.get_slider = async (req, res) => {

  let slider;
  try {
    slider = await Slider.find({});
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: slider,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
  
  };


module.exports = sliderController;
