const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Home_Categories = new Schema({
    category_id: { type: Schema.Types.ObjectId },
    value: { type: String },
    url: { type: String }
});

Home_Categories.plugin(mongoosePaginate);

module.exports = mongoose.model("Home_Categories", Home_Categories);