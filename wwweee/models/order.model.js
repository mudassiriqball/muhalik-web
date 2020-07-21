const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const order = new Schema({
  c_id: {
    type: Schema.Types.ObjectId,
  },
  c_name:{
    type:String
  },
  city: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  shipping_charges: {
    type: Number,
  },
  sub_total: {
    type: Number,
  },
  entry_date: {
    type: Date,
  },
  status: {
    type: String,
  },
  products: [
    {
      vendor_id: { type: Schema.Types.ObjectId },
      p_id: { type: Schema.Types.ObjectId },
      variation_id:{ type:Schema.Types.ObjectId },
      quantity: { type: Number },
      price: { type: Number },
    },
  ],
});

order.plugin(mongoosePaginate);
module.exports = mongoose.model("Orders", order);
