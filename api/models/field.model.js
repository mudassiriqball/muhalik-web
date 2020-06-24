const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const fields = new Schema({
  label: {
    type: String
  },
  value: {
    type: String
  },
  entry_date: {
    type: Date
  }
});

fields.plugin(mongoosePaginate);
module.exports = mongoose.model("Fields", fields);