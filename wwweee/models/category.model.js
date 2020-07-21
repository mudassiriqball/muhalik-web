const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Category = new Schema({
    label: { 
      type: String
     },
    value: { 
      type: String 
    },
    url:{
      type:String
    },
  entry_date: {
    type: Date,
  },
});

Category.plugin(mongoosePaginate);

module.exports = mongoose.model("Categories", Category);
