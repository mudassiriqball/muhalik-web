// // const mongoose = require("mongoose");
// // const mongoosePaginate = require("mongoose-paginate");
// // const Schema = mongoose.Schema;

// // const Product = new Schema({
// //   id: {
// //     type: Number,
// //     unique: true,
// //     sparse: true
// //   },
// //   product_name: {
// //     type: String,
// //   },
// //   product_price: {
// //     type: Number,
// //   }, 
// //   product_brand_name: {
// //     type: String
// //   },
// //   product_image_link: [
// //     {
// //       value: { type: String},
// //       label: { type: String}
// //     }
// //   ],
// //   product_colors: [
// //     {
// //       value: { type: String },
// //       label: { type: String }
// //     }
// //   ],
// //   product_in_stock: {
// //     type: Number
// //   },
// //   product_shipping_cost: {
// //     type: Number
// //   },
// //   product_size: [
// //     {
// //       value: { type: String },
// //       label: { type: String }
// //     }
// //   ],
// //   product_category: [
// //     {
// //       value: { type: String },
// //       label: { type: String }
// //     }
// //   ],
// //   product_warranty: {
// //     type: String
// //   },
// //   product_discount: {
// //     type: String
// //   },
// //   warranty_type: {
// //     type: String
// //   },
// //   product_description: {
// //     type: String
// //   },
// //   product_entry_date: {
// //     type: String
// //   }

// //   // image: {
// //   //     data: Buffer,
// //   //     contentType: String
// //   // },

// //   // is_deleted: {
// //   //     type: Boolean,
// //   //     default: false
// //   // }
// // });

// // Product.plugin(mongoosePaginate);

// // module.exports = mongoose.model("Product", Product);


// const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
// const Schema = mongoose.Schema;

// const Product = new Schema({
//   id: {
//     type: Number,
//     unique: true,
//     sparse: true
//   },
//   vendor_id: {
//     type: String,
//     unique: true,
//     sparse: true
//   },
//   product_name: {
//     type: String,
//   },
//   product_price: {
//     type: Number,
//   },
//   product_brand_name: {
//     type: String
//   },
//   product_image_link: [
//     {
//       label: { type: String },
//       value: { type: String }
//     }
//   ],
//   product_colors: [
//     {
//       label: { type: String },
//       value: { type: String }
//     }
//   ],
//   product_in_stock: {
//     type: Number
//   },
//   product_shipping_cost: {
//     type: Number
//   },
//   product_size: [
//     {
//       label: { type: String },
//       value: { type: String }
//     }
//   ],
//   product_category: [
//     {
//       value: { type: String },
//       label: { type: String }
//     }
//   ],
//   product_warranty: {
//     type: String
//   },
//   product_discount: {
//     type: String
//   },
//   warranty_type: {
//     type: String
//   },
//   product_description: {
//     type: String
//   },
//   product_entry_date: {
//     type: String
//   }

//   // image: {
//   //     data: Buffer,
//   //     contentType: String
//   // },
//   // is_deleted: {
//   //     type: Boolean,
//   //     default: false
//   // }
// });

// Product.plugin(mongoosePaginate);

// module.exports = mongoose.model("Product", Product);


const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Product = new Schema({
  vendor_id: {
    type: String,
  },
  product_name: {
    type: String,
  },
  product_category: [
    {
      value: { type: String }
    },
  ],
  product_tags: [
    {
      value: { type: String }
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
    type: Number,
  },
  shipping_charges: {
    type: Number,
  },
  product_image_link: [
    {
      value: { type: String }
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
    },
  ],

  product_entry_date: {
    type: String,
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