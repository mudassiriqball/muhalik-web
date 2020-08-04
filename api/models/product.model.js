const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product = new Schema({
  vendor_id: {
    type: Schema.Types.ObjectId,
  },
  category: {
    type: Schema.Types.ObjectId,
  },
  sub_category: {
    type: Schema.Types.ObjectId,
  },
  product_name: {
    type: String,
  },
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
      url: {
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

  rating_review: {
    rating: {
      overall: { type: Number, default: 0 },
      one_star: { type: Number, default: 0 },
      two_star: { type: Number, default: 0 },
      three_star: { type: Number, default: 0 },
      four_star: { type: Number, default: 0 },
      five_star: { type: Number, default: 0 },
    },
    reviews: [
      {
        c_name: { type: String },
        review: { type: String },
        entry_date: { type: Date },
      },
    ],
  },

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
      discount: { type: Number },
      warranty: { type: Number },
      warranty_type: { type: String },
      image_link: [
        {
          url: { type: String },
        },
      ],
      rating_review: {
        rating: {
          overall: { type: Number, default: 0 },
          one_star: { type: Number, default: 0 },
          two_star: { type: Number, default: 0 },
          three_star: { type: Number, default: 0 },
          four_star: { type: Number, default: 0 },
          five_star: { type: Number, default: 0 },
        },
        reviews: [
          {
            c_name: { type: String },
            review: { type: String },
            entry_date: { type: Date },
          },
        ],
      },
    },
  ],

  entry_date: {
    type: Date,
  },

  isdeleted: {
    type: Boolean,
  },
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);
