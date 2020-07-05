const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const slider = new Schema({
  url: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
  },
  sub_category: {
    type: Schema.Types.ObjectId,
  },
  entry_date: {
    type: Date
  }
});

slider.plugin(mongoosePaginate);
module.exports = mongoose.model("Slider", slider);
