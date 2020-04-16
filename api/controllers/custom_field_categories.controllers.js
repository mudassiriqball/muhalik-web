const Custom_field_category_Controller = {};
const Custom_field_category = require("../models/custom_field_categories.model");

Custom_field_category_Controller.add_custom_field_category = async (req, res) => {
    try {
        const body = req.body.data;
        var datetime = new Date();
        var date = datetime.toISOString().slice(0, 10);
        body.custom_field_category_entry_date = date;

        const custom_field_category = new Custom_field_category(body);
        const result = await custom_field_category.save();
        res.status(200).send({
            code: 200,
            message: "Custom Category Added Successfully"
        });
        return res
            .status(500)()
            .send({ message: "Products_Categories Added Successfully" });
    } catch (error) {
        console.log("error", error);
    }
};

Custom_field_category_Controller.getAll = async (req, res) => {
    let custom_field_category;
    // let categories = [];
    try {
        let merged = {};
        const start = 0;
        const length = 100;
        custom_field_category = await Custom_field_category.paginate(merged, {
            offset: parseInt(start),
            limit: parseInt(length)
        });
        // var getdata = custom_field_category.docs;
        // var i = 0;
        // getdata.forEach((element) => {
        //   categories[i] = { value: element.value, label: element.label };
        //   i++;
        // });
        res.status(200).send({
            code: 200,
            message: "Successful",
            data: custom_field_category
        });
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = Custom_field_category_Controller;