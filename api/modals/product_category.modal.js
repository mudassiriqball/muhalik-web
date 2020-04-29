const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product_Categories = new Schema({
  category: {
    type: String,
  },
  sub_category: {
    type: String
  },
  sub_sub_category: {
    type: String
  },
  entry_date: {
    type: String
  },
});

Product_Categories.plugin(mongoosePaginate);

module.exports = mongoose.model("Categories", Product_Categories);
