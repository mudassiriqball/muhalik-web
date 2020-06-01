const categoriesController = {};
const Categories = require("../models/category.model");
const Sub_Categories = require("../models/sub-category.model");
const Product = require("../models/product.model");
const Fields = require("../models/field.model");
const Field_Request = require("../models/field-request.model");

categoriesController.add_category = async (req, res) => {
  const body = req.body.data;
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.entry_date = date;

    const search = await Categories.findOne({
      "label": body.category.label,
    });
    if (search === null) {
      const category = new Categories(body.category);
      const result = await category.save();
      console.log(category._id);
      body.sub_category.category_id = category._id;
      const sub_category = new Sub_Categories(body.sub_category);
      const result1 = await sub_category.save();
      res.status(200).send({
        code: 200,
        message: "Category Added Successfully",
      });
      return res
        .status(500)
        .send({ message: "Category Adding Successfully" });
    } else if (search.label === body.category.label) {
      const search1 = await Sub_Categories.find({
        category_id: search._id,
        "label": body.sub_category.label,
      });
      if (!search1.length) {
        body.sub_category.category_id = search._id;
        const sub_category = new Sub_Categories(body.sub_category);
        const result1 = await sub_category.save();
        res.status(200).send({
          code: 200,
          message: "Category Added Successfully",
        });
        return res
          .status(500)()
          .send({ message: "Category Adding Successfully" });
      } else {
        res
          .send({
            message: "Already exists",
            code: 500,
          })
          .status(500);
      }
    }
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
      message: "Field Added Successfully",
    });
    return res.status(500)().send({ message: "Field Added Successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

categoriesController.get_categories = async (req, res) => {
  let category;
  let sub_category;

  try {
    let merged = {};
    const start = 0;
    const length = 100;
    category = await Categories.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length),
    });
    sub_category = await Sub_Categories.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length),
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      category,
      sub_category
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

// categoriesController.get_categories = async (req, res) => {
//   let products_category;
//   let categories = [];
//   try {
//     let merged = {};
//     const start = 0;
//     const length = 100;
//     products_category = await Categories.paginate(merged, {
//       offset: parseInt(start),
//       limit: parseInt(length)
//     });
//     var getdata = products_category.docs;
//     var i = 0;
//     getdata.forEach(element => {
//       categories[i] = { value: element.value, label: element.label };
//       i++;
//       //console.log(categories);
//     });
//     res.status(200).send({
//       code: 200,
//       message: "Successful",
//       data: categories
//     });
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// };

categoriesController.get_fields = async (req, res) => {
  let fields;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    fields = await Fields.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length),
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: fields,
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
    tags = await Product.find(
      {}, { _id: 0, product_tags: 1 }).distinct('product_tags.value');
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: tags,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

categoriesController.add_field_request = async (req, res) => {
  const body = req.body;
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.entry_date = date;
    const custom_fields_requests = new Field_Request(body);
    const result = await custom_fields_requests.save();
    res.status(200).send({
      code: 200,
      message: "custom_fields_requested  Successfully",
    });
    return res
      .status(500)
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
      limit: parseInt(length),
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: fields,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

module.exports = categoriesController;