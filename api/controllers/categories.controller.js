const categoriesController = {};
const Product_Categories = require("../modals/product_category.modal");
const Tags = require("../modals/tag.modal");
const Fields = require("../modals/field.modal");
const Field_Request = require("../modals/field-request.modal");

categoriesController.add_category = async (req, res) => {
  const body = req.body.data;
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.entry_date = date;
    const product_category = new Product_Categories(body);
    const result = await product_category.save();
    res.status(200).send({
      code: 200,
      message: "Category Added Successfully"
    });
    return res
      .status(500)
      .send({ message: "Category Adding Failed" });
  } catch (error) {
    console.log("error", error);
  }
};


categoriesController.add_field = async (req, res) => {
  const body = req.body.data;
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.entry_date = date;
    const fields = new Fields(body);
    const result = await fields.save();
    res.status(200).send({
      code: 200,
      message: "Field Added Successfully"
    });
    return res
      .status(500)
      .send({ message: "Field Added Successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

categoriesController.add_tag = async (req, res) => {
  const body = req.body.data;
  console.log('fields data:', body)
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.entry_date = date;
    const tags = new Tags(body);
    const result = await tags.save();
    res.status(200).send({
      code: 200,
      message: "Tag Added Successfully"
    });
    return res
      .status(500)
      .send({ message: "Tags Added Successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

categoriesController.get_categories = async (req, res) => {
  let caterories;
  let categories = [];
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    caterories = await Product_Categories.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    var getdata = caterories.docs;
    var i = 0;
    getdata.forEach(element => {
      categories[i] = { value: element.value, label: element.label };
      i++;
      //console.log(categories);
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: categories
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

categoriesController.get_fields = async (req, res) => {
  let fields;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    fields = await Fields.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: fields
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

categoriesController.get_tags = async (req, res) => {
  let tags;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    tags = await Tags.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: tags
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};


categoriesController.add_field_request = async (req, res) => {
  const body = req.body.data;
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.Custom_fields_temporary_requests_date = date;
    const custom_fields_requests = new Field_Request(body);
    const result = await custom_fields_requests.save();
    res.status(200).send({
      code: 200,
      message: "custom_fields_requested  Successfully"
    });
    return res
      .status(500)()
      .send({ message: "custom_fields_requested  Successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

categoriesController.get_field_requests = async (req, res) => {
  let fields;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    fields = await Field_Request.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: fields
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

module.exports = categoriesController;
