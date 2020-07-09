const productsController = {};
const Products = require("../models/product.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


productsController.add_rating_and_review = async (req, res) => {
  const body = req.body;
  var datetime = new Date();
  body.entry_date = datetime;

  var search = "";
  if (body.rating === 1) {
    search = "one_star";
  } else if (body.rating === 2) {
    search = "two_star";
  } else if (body.rating === 3) {
    search = "three_star";
  } else if (body.rating === 4) {
    search = "four_star";
  } else if (body.rating === 5) {
    search = "five_star";
  }

  if (!req.query.variation_id) {
    const products1 = await Products.update(
      { _id: req.query._id },
      {
        $push: { "rating_review.reviews": body },
        $inc: { [`rating_review.rating.${search}`]: 1 },
      }
    );

    const products2 = await Products.findOne(
      { _id: req.query._id },
      { rating_review: 1 }
    );
    const one = products2.rating_review.rating.one_star;
    const two = products2.rating_review.rating.two_star;
    const three = products2.rating_review.rating.three_star;
    const four = products2.rating_review.rating.four_star;
    const five = products2.rating_review.rating.five_star;
    const up = one * 1 + two * 2 + three * 3 + four * 4 + five * 5;
    const down = one + two + three + four + five;
    const overall = up / down;

    const products3 = await Products.update(
      { _id: req.query._id },
      {
        $set: { "rating_review.rating.overall": overall.toFixed(1) },
      }
    );
    res.status(200).send({
      code: 200,
      message: "Thank You For Review And Rating",
    });
  } else {
    const products1 = await Products.update(
      { _id: req.query._id },
      {
        $push: { [`product_variations.$[i].rating_review.reviews`]: body },
        $inc: { [`product_variations.$[i].rating_review.rating.${search}`]: 1 },
      },
      { arrayFilters: [{ "i._id": req.query.variation_id }], multi: true }
    );
    const products2 = await Products.find(
      { _id: req.query._id }, { "product_variations": 1, _id: 0 }
    );
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var up = 0;
    var down = 0;
    var overall = 0;
    var index = req.query.variation_index;


    products2.forEach(element => {
      one = element.product_variations[index].rating_review.rating.one_star;
      two = element.product_variations[index].rating_review.rating.two_star;
      three = element.product_variations[index].rating_review.rating.three_star;
      four = element.product_variations[index].rating_review.rating.four_star;
      five = element.product_variations[index].rating_review.rating.five_star;

    });
    up = one * 1 + two * 2 + three * 3 + four * 4 + five * 5;
    down = one + two + three + four + five;
    overall = up / down;


    const products3 = await Products.update(
      { _id: req.query._id },
      {
        $set: { "product_variations.$[i].rating_review.rating.overall": overall.toFixed(1) },
      },
      { arrayFilters: [{ "i._id": req.query.variation_id }], multi: true }

    );
    res.status(200).send({
      code: 200,
      message: "Thank You For Review And Rating",
    });

  }
};

//Add product endpoint definition
productsController.addProduct = async (req, res) => {
  const body = req.body;

  var url;
  const urls = [];
  for (const file of req.files) {
    urls.push({ url: file.location });
  }

  try {
    body.dangerous_goods = JSON.parse(body.dangerous_goods);
    body.product_tags = JSON.parse(body.product_tags);

    var datetime = new Date();
    body.isdeleted = false;
    body.entry_date = datetime;
    const header = jwt.decode(req.headers.authorization);
    body.vendor_id = header.data._id;
    if (body.product_type === "simple-product") {
      const body1 = {
        rating: {
          one_star: 0,
          two_star: 0,
          three_star: 0,
          four_star: 0,
          five_star: 0,
          overall: 0,
        },
      };
      body.rating_review = body1;
      body.custom_fields = JSON.parse(body.custom_fields);
      body.product_image_link = urls;
    } else if (body.product_type === "variable-prouct") {
      body.product_variations = JSON.parse(body.product_variations);
      var count = 0;
      for (let index = 0; index < body.product_variations.length; index++) {
        for (
          let k = 0;
          k < body.product_variations[index].image_link.length;
          k++
        ) {
          body.product_variations[index].image_link[k] = urls[count];
          count++;
        }
      }
    }
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

productsController.get_products = async (req, res) => {

  let products;
  try {
    if (req.query.q === "new-arrival") {
      var datetime = new Date();
      datetime.setMonth(datetime.getMonth() - 1);
      products = await Products.paginate(
        { entry_date: { $gte: new Date(datetime) } },
        {
          limit: parseInt(req.query.limit),
          page: parseInt(req.query.page),
        }
      );
      if (products) {
        res.status(200).send({
          code: 200,
          message: "Successful",
          data: products.docs,
        });
      } else {
        res.status(500).send({
          code: 500,
          message: "Does Not Exist",
        });
      }
    } else if (req.query.field === "category" && req.query.field === "sub-category") {
      var ObjectId = mongoose.Types.ObjectId;
      const _id = new ObjectId(req.query.q)
      const field = req.query.field;
      const search = {};
      search[field] = _id;
      const products = await Products.aggregate([
        {
          $match:
            search
        },
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        { $unwind: "$category" },
        {
          $lookup: {
            from: "sub_categories",
            localField: "sub_category",
            foreignField: "_id",
            as: "sub_category",
          },
        },
        { $unwind: "$sub_category" },
        {
          $skip: (req.query.page - 1) * req.query.limit
        },
        {
          $limit: parseInt(req.query.limit)
        },
      ]);
      if (products) {
        res.status(200).send({
          code: 200,
          message: "Successful",
          data: products,
        });
      } else {
        res.status(500).send({
          code: 500,
          message: "Does Not Exist",
        });
      }
    } else {
      const field = req.query.field;
      const search = {};
      search[field] = req.query.q;
      const products = await Products.aggregate([
        {
          $match:
            search
        },
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        { $unwind: "$category" },
        {
          $lookup: {
            from: "sub_categories",
            localField: "sub_category",
            foreignField: "_id",
            as: "sub_category",
          },
        },
        { $unwind: "$sub_category" },
        {
          $skip: (req.query.page - 1) * req.query.limit
        },
        {
          $limit: parseInt(req.query.limit)
        },
      ]);
      if (products) {
        res.status(200).send({
          code: 200,
          message: "Successful",
          data: products,
        });
      } else {
        res.status(500).send({
          code: 500,
          message: "Does Not Exist",
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.get_all_products = async (req, res) => {

  try {
    const products = await Products.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $lookup: {
          from: "sub_categories",
          localField: "sub_category",
          foreignField: "_id",
          as: "sub_category",
        },
      },
      { $unwind: "$sub_category" },
      {
        $skip: (req.query.page - 1) * req.query.limit
      },
      {
        $limit: parseInt(req.query.limit)
      },
    ]);
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: products,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

productsController.get_product_by_id = async (req, res) => {
  try {
    var ObjectId = mongoose.Types.ObjectId;
    const _id = new ObjectId(req.params._id)
    const products = await Products.aggregate([
      {
        $match: {
          _id: _id,
          isdeleted: false,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $lookup: {
          from: "sub_categories",
          localField: "sub_category",
          foreignField: "_id",
          as: "sub_category",
        },
      },
      { $unwind: "$sub_category" },

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


// {
//   $project: {
//     product_name: 1,
//     product_type: 1,
//     product_weight: 1,
//     value: "$category.value",
//     label: "$category.label",
//   },
// },
//Get All Products of specific vendor endpoint definition
productsController.get_vendor_products = async (req, res) => {

  try {
    var ObjectId = mongoose.Types.ObjectId;
    const _id = new ObjectId(req.params._id)
    const products = await Products.aggregate([
      {
        $match: {
          vendor_id: _id,
          isdeleted: false,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $lookup: {
          from: "sub_categories",
          localField: "sub_category",
          foreignField: "_id",
          as: "sub_category",
        },
      },
      { $unwind: "$sub_category" },
      {
        $skip: (req.query.page - 1) * req.query.limit
      },
      {
        $limit: parseInt(req.query.limit)
      },
      // {
      //   $project: {
      //     product_name: 1,
      //     product_type: 1,
      //     product_weight: 1,
      //     value: "$category.value",
      //     label: "$category.label",
      //   },
      // },
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
//     // req.body.product_entry_date=date;
//   try {
//     var ws = wb.Sheets["Worksheet"];
//     var data = xlsx.utils.sheet_to_json(ws);

//     data.forEach(element => {
//       element.product_entry_date=date;
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
