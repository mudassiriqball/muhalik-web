const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product = new Schema({
  id: {
    type: Number,
    unique: true,
    sparse: true
  },
  product_name: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_brand_name: {
    type: String
  },
  product_image_link: {
    type: String,
    required: true
  },
  product_colors: {
    type: String
  },
  product_in_stock: {
    type: Number
  },
  product_shipping_cost: {
    type: Number
  },
  product_size: {
    type: String
  },
  product_category: {
    type: String
  },
  product_warranty: {
    type: String
  },
  product_discount: {
    type: String
  },
  product_description: {
    type: String
  },
  product_entry_date: {
    type: String
  }

  // image: {
  //     data: Buffer,
  //     contentType: String
  // },
  // is_deleted: {
  //     type: Boolean,
  //     default: false
  // }
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);