const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Unique_category = new Schema({
    cat_id: { 
        type: Schema.Types.ObjectId,
    },
});

Unique_category.plugin(mongoosePaginate);

module.exports = mongoose.model("Unique_Category", Unique_category);
