const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const field_requests = new Schema({
  label: {
    type: String
  },
  value: {
    type: String
  },
  name: {
    type: String
  },
  entry_date: {
    type: Date
  }
});

field_requests.plugin(mongoosePaginate);
module.exports = mongoose.model("Field_Requests", field_requests);
