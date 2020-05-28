const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product_Categories = new Schema({
  label: { type: String },
  value: { type: String },
  entry_date: {
    type: String,
  },
});

Product_Categories.plugin(mongoosePaginate);

module.exports = mongoose.model("Categories", Product_Categories);
