const sliderController = {};
const Slider = require("../models/slider.model");
const fs = require("fs");
var AWS = require("aws-sdk");

var s3 = new AWS.S3({
  secretAccessKey: "nKZSmn0MFET9TEtEy4kUrksDjzkMFBQdt+x6+aPc",
  accessKeyId: "AKIAIYECX324S27WGWFQ",
});

sliderController.add_slider = async (req, res) => {
  const url = req.files[0].location;

  const body = req.body;

  try {
    var datetime = new Date();
    body.entry_date = datetime;
    body.url = url;
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

sliderController.update_slider = async (req, res) => {
  const _id = req.params._id;

  const slider = await Slider.findOne({ _id: _id });
  const token = slider.url;
  const filenameToRemove = token.split("/").slice(-1)[0];

  const body = req.body;

  if (!_id) {
    Fu;
    res.status(500).send({
      message: "ID missing",
    });
  } else {
    try {
      s3.deleteObject(
        {
          Bucket: "slider-images",
          Key: filenameToRemove,
        },
        function (err, data) { }
      );

      var url = req.files[0].location;
      Slider.findOneAndUpdate(
        { _id: _id },
        {
          $set: { url: url },
        },
        {
          returnNewDocument: true,
        },
        function (error, result) {
          res.status(200).send({
            code: 200,
            message: "Slider Updated Successfully",
          });
        }
      );
    } catch (error) {
      console.log("error", error);
      return res.status(500).send(error);
    }
  }
};

sliderController.delete_slider = async (req, res) => {
  const _id = req.params._id;

  if (!_id) {
    Fu;
    res.status(500).send({
      message: "ID missing",
    });
  } else {
    const slider = await Slider.findOne({ _id: _id });
    const token = slider.url;
    const filenameToRemove = token.split("/").slice(-1)[0];
    s3.deleteObject(
      {
        Bucket: "slider-images",
        Key: filenameToRemove,
      },
      function (err, data) { }
    );
    Slider.findByIdAndDelete(_id, function (err) {
      res.status(200).send({
        code: 200,
        message: "deleted Successful",
      });
    });
  }
};

module.exports = sliderController;
