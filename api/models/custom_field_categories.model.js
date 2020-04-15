const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const Custom_fields = new Schema({
    custom_field_category_name: {
        type: String
    },
    custom_field_category_entry_date: {
        type: String
    }
});

Custom_fields.plugin(mongoosePaginate);
module.exports = mongoose.model("Custom_field", Custom_fields);