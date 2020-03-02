const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product_Categories = new Schema({
  id: {
    type: Number,
    unique: true,
    sparse: true
  },
  value: {
    type: String,
    required: true
  },
  product_entry_date:{
    type:String
  },
  label:{
    type: String,
  }
});

Product_Categories.plugin(mongoosePaginate);

module.exports = mongoose.model("Product_Categories", Product_Categories);