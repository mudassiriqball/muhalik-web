const productsController = {};
const Products = require("../models/product.model");
//const fs = require("fs");
const jwt = require("jsonwebtoken");
const util = require("util");

const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');

dotenv.config();
//const xlsx = require("xlsx");
//var wb = xlsx.readFile("../prd_inv_template.xlsx");

productsController.get = async (req, res) => {
  try {
    const id = get_decoded_token(req);
    console.log("2", id);
  } catch (error) {
    console.log("Error");
  }
};

async function get_decoded_token(req) {
  try {
    const header = jwt.decode(req.headers.authorization);
    console.log("1", header);
    return header.data.id;
  } catch (error) {
    console.log("Error");
  }
}

productsController.addfile = async (req, res) => {
  console.log("111", req.files);
};


//Add product endpoint definition
productsController.addProduct = async (req, res) => {
  const body = req.body;
  console.log("body0", body);

  body.product_variations = JSON.parse(body.product_variations);
  body.custom_fields = JSON.parse(body.custom_fields);
  body.dangerous_goods = JSON.parse(body.dangerous_goods);
  body.product_tags = JSON.parse(body.product_tags);

  cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

  for (let index = 0; index < req.files.length; index++) {
    cloudinary.uploader.upload(req.files[index].path, function (err, result) {
      console.log("Res", result.url);
    });
  }

  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    body.isdeleted = false;
    body.entry_date = date;
    const header = jwt.decode(req.headers.authorization);
    body.vendor_id = header.data._id;
    if (body.product_type === "simple-product") {
      const paths = [];
      for (let index = 0; index < req.files.length; index++) {
        paths.push({ path: req.files[index].path });
      }
      body.product_image_link = paths;
    } else if (body.product_type === "variable-prouct") {
      body.product_image_link = null;
      var count = 0;
      for (let index = 0; index < body.product_variations.length; index++) {
        for (
          let k = 0;
          k < body.product_variations[index].image_link.length;
          k++
        ) {
          if (
            body.product_variations[index].image_link[k].name ===
            req.files[count].originalname
          ) {
            body.product_variations[index].image_link[k].path =
              req.files[count].path;
            console.log(
              "11",
              body.product_variations[index].image_link[k].path
            );
            count++;
          }
        }
      }
    }
    console.log("body1", body);
    const product = new Products(body);
    const result = await product.save();
    res.status(200).send({
      code: 200,
      message: "product Added Successfully",
    });
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .send({ message: "Product Added Successfully", error });
  }
};

//Get All Products of specific vendor endpoint definition
productsController.getAll = async (req, res) => {
  const header = jwt.decode(req.headers.authorization);
  const id = header.data._id;
  let products;

  try {
    // products = await Products.find({ vendor_id: id ,isdeleted:false});
    // category = await Category.find({ category_id: id});

    // products= await Products.aggregate([{
    //   $match:{vendor_id: id ,isdeleted:false}},
    //   { $lookup: { from: "user",localField: "vendor_id", foreignField: "_id", as: "category "}
    // }]);
    products = await Products.aggregate([
      {
        $match: {
          vendor_id: id, isdeleted: false
        }
      },
      {
        $lookup:
        {
          from: "users",
          localField: "vendor_id",
          foreignField: "_id",
          as: "category"
        }
      },
      { $unwind: "$category" }
    ]);
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: products,
    });

  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

// productsController.bulkupload = async (req, res) => {
//   console.log("Check:",req.body);
//   var datetime = new Date();
//   var date=datetime.toISOString().slice(0,10);
//     // const body = req.body;
//     // req.body.entry_date=date;
//   try {
//     var ws = wb.Sheets["Worksheet"];
//     var data = xlsx.utils.sheet_to_json(ws);

//     data.forEach(element => {
//       element.entry_date=date;
//       const product = new Products(element);
//       product.save();
//     });
//     res.status(200).send({
//       code: 200,
//       message: "Product Added Successfully"
//     });
//   } catch (error) {
//     console.log("error", error);
//     return res
//       .status(500)
//       .send({ message: "Product Added Successfully", error });
//   }
// };

productsController.getSingleProduct = async (req, res) => {
  let product;
  try {
    const _id = req.params._id;
    product = await products.findOne({ _id: _id });
    res.status(200).send({
      code: 200,
      message: "Successful",
      product,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.deleteProduct = async (req, res) => {
  if (!req.params._id) {
    Fu;
    res.status(500).send({
      message: "ID missing",
    });
  }
  try {
    const _id = req.params._id;
    Products.findOneAndUpdate(
      { _id: _id },
      {
        $set: { isdeleted: true },
      },
      {
        returnNewDocument: true,
      },
      function (error, result) {
        res.status(200).send({
          code: 200,
          message: "Deleted Successfully",
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.updateProduct = async (req, res) => {
  if (!req.params._id) {
    res.status(500).send({
      message: "ID missing",
    });
  }
  try {
    const _id = req.params._id;
    let updates = req.body;
    runUpdate(_id, updates, res);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

async function runUpdate(_id, updates, res) {
  try {
    const result = await Products.updateOne(
      {
        _id: _id,
      },
      {
        $set: updates,
      },
      {
        upsert: true,
        runValidators: true,
      }
    );

    {
      if (result.nModified == 1) {
        res.status(200).send({
          code: 200,
          message: "Updated Successfully",
        });
      } else if (result.upserted) {
        res.status(200).send({
          code: 200,
          message: "Created Successfully",
        });
      } else {
        res.status(422).send({
          code: 422,
          message: "Unprocessible Entity",
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
}
async function runUpdateById(id, updates, res) {
  try {
    const result = await products.updateOne(
      {
        id: id,
      },
      {
        $set: updates,
      },
      {
        upsert: true,
        runValidators: true,
      }
    );

    if (result.nModified == 1) {
      res.status(200).send({
        code: 200,
        message: "Updated Successfully",
      });
    } else if (result.upserted) {
      res.status(200).send({
        code: 200,
        message: "Created Successfully",
      });
    } else {
      res.status(200).send({
        code: 200,
        message: "Task completed successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
}

productsController.get_total_products = async (req, res) => {
  let products;
  try {
    products = await Products.paginate();
    console.log(products.total);
    const count = products.total;
    res.status(200).send({
      code: 200,
      message: "Successful",
      count,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.get_total_sold = async (req, res) => {
  let products;
  var count = 0;
  try {
    products = await Products.paginate();
    var come = products.docs;

    come.forEach((element) => {
      count = count + element.product_in_stock;
    });
    console.log(count);
    res.status(200).send({
      code: 200,
      message: "Successful",
      count,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.geteverything = async (req, res) => {
  let data = {
    noOfTotalProducts: 0,
    noOfInStockProducts: 0,
    noOfSoldProducts: 0,
    noOfReturnedProducts: 0,
  };
  let products;
  const header = jwt.decode(req.headers.authorization);
  const match_vendor_id = header.data._id;
  try {
    products = await Products.find(
      { vendor_id: match_vendor_id },
      { _id: 0, product_in_stock: 1 }
    );

    console.log(products);
    data.noOfTotalProducts = products.length; // store number of documents in data.nooftotalproducts
    for (let index = 0; index < products.length; index++) {
      data.noOfInStockProducts += products[index].product_in_stock;
    }
    res.status(200).send({
      code: 200,
      message: "successful",
      data,
    });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = productsController;