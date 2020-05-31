const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product = new Schema({
  vendor_id: {
    type: String,
  },
  category_id: {
    type: String
  },
  sub_category_id: {
    type: String
  },
  product_name: {
    type: String,
  },
  // product_category: {
  //   label: { type: String },
  //   value: { type: String },
  // },

  // product_sub_category: {
  //   label: { type: String },
  //   value: { type: String },
  // },
  // product_sub_sub_category: {
  //   label: { type: String },
  //   value: { type: String },
  // },

  product_tags: [
    {
      label: { type: String },
      value: { type: String },
    },
  ],
  dangerous_goods: [
    {
      value: { type: String },
    },
  ],
  product_type: {
    type: String,
  },
  product_weight: {
    type: Number,
  },
  dimension_length: {
    type: Number,
  },
  dimension_width: {
    type: Number,
  },
  dimension_height: {
    type: Number,
  },
  handling_fee: {
    type: Number,
  },

  product_description: {
    type: String,
  },
  product_brand_name: {
    type: String,
  },
  product_price: {
    type: Number,
  },

  purchase_note: {
    type: String,
  },
  product_in_stock: {
    type: Number,
  },
  product_warranty: {
    type: String,
  },
  warranty_type: {
    type: String,
  },
  product_discount: {
    type: String,
  },
  sku: {
    type: String,
  },
  shipping_charges: {
    type: Number,
  },
  product_image_link: [
    {
      path: {
        type: String,
      },
    },
  ],

  custom_fields: [
    {
      name: { type: String },
      value: { type: String },
    },
  ],

  product_variations: [
    {
      item: [
        {
          name: { type: String },
          value: { type: String },
        },
      ],
      custom_fields: [
        {
          name: { type: String },
          value: { type: String },
        },
      ],
      price: { type: Number },
      stock: { type: Number },
      image_link: [
        {
          path: { type: String },
        },
      ],
    },
  ],

  entry_date: {
    type: String,
  },

  isdeleted: {
    type: Boolean,
  },

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