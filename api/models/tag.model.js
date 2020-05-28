const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const tags = new Schema({
  label: {
    type: String
  },
  value: {
    type: String
  },
  entry_date: {
    type: String
  }
});

tags.plugin(mongoosePaginate);
module.exports = mongoose.model("Tags", tags);
