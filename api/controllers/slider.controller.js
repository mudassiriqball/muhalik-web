const sliderController = {};
const Slider = require("../models/slider.model");
const fs = require("fs");

sliderController.add_slider = async (req, res) => {
  const body = req.body;
  var url = req.files[0].location;


  try {
    var datetime = new Date();
    body.entry_date = datetime;
    body.url = url;
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
