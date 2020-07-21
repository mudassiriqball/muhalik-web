const orderController = {};
const Orders = require("../models/order.model");
const Product = require("../models/product.model");
const mongoose = require("mongoose");

// Post Methods
orderController.place_order = async (req, res) => {
  let data = [];
  var found = false;
  var saveorder = false;

  try {
    const body = req.body;

    for (let index = 0; index < body.products.length; index++) {
      if (body.products[index].variation_id) {
        const search = await Product.find(
          { "product_variations._id": body.products[index].variation_id },
          {
            product_variations: {
              $elemMatch: { _id: body.products[index].variation_id },
            },
          }
        );
        if (
          search[0].product_variations[0].stock < body.products[index].quantity
        ) {
          found = true;
          let array = {
            variation_id: body.products[index].variation_id,
            quantity: body.products[index].quantity,
            stock: search[0].product_variations[0].stock,
          };
          data.push(array);
        }
      } else {
        const search = await Product.find(
          { _id: body.products[index].p_id },
          { product_in_stock: 1 }
        );
        if (search[0].product_in_stock < body.products[index].quantity) {
          found = true;
          let array1 = {
            product_id: body.products[index].p_id,
            quantity: body.products[index].quantity,
            stock: search[0].product_in_stock,
          };
          data.push(array1);
        }
      }
    }
    if (found === true) {
      res.status(500).send({
        code: 500,
        message: "You Have To Change Quantity Of Some Products",
        data: data,
      });
    } else if (found === false) {
      for (let index = 0; index < body.products.length; index++) {
        if (body.products[index].variation_id) {
          const new_stock = await Product.findOneAndUpdate(
            {
              "product_variations._id": body.products[index].variation_id,
            },
            {
              $inc: {
                ["product_variations.$[i].stock"]: -body.products[index]
                  .quantity,
              },
            },
            {
              arrayFilters: [{ "i._id": body.products[index].variation_id }],
              multi: true,
            }
          );
          saveorder = true;
        } else {
          const new_stock = await Product.findOneAndUpdate(
            {
              _id: body.products[index].p_id,
            },
            {
              $inc: { product_in_stock: -body.products[index].quantity },
            }
          );
          saveorder = true;
        }
      }
    }
    if (saveorder === true) {
      var datetime = new Date();
      body.entry_date = datetime;
      body.status = "pending";
      body.c_id = req.params._id;
      body.total = body.sub_total_price + body.shipping_charges;
      const orders = new Orders(body);
      const result = await orders.save();
      res.status(200).send({
        code: 200,
        message: "orders Added Successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error",
    });
  }
};

orderController.get_all_orders = async (req, res) => {
  let orders;
  try {
    orders = await Orders.paginate(
      { status: req.params._status },
      {
        limit: parseInt(req.query.limit),
        page: parseInt(req.query.page),
      }
    );
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: orders,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

orderController.get_vendors_orders = async (req, res) => {
  var ObjectId = mongoose.Types.ObjectId;
  const _id = new ObjectId(req.params._id);

  try {
    const total = await Orders.countDocuments({
      "products.vendor_id": _id,
      status: req.query.status,
    });
    const order = await Orders.aggregate([
      {
        $match: {
          "products.vendor_id": _id,
          status: req.query.status,
        },
      },
      {
        $project: {
          products: {
            $filter: {
              input: "$products",
              as: "item",
              cond: { $eq: ["$$item.vendor_id", _id] },
            },
          },
          sub_total_price: 1,
          shipping_charges: 1,
          entry_date: 1,
          status: 1,
          c_id: 1,
          total: 1,
          city: 1,
          mobile: 1,
          address: 1,
        },
      },
      {
        $skip: (req.query.page - 1) * req.query.limit,
      },
      {
        $limit: parseInt(req.query.limit),
      },
    ]);
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: order,
      total,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

orderController.get_all_query_search_orders = async (req, res) => {
  var q = req.query.q;

  // if (req.query.field === "mobile") {
  //   var mobile = req.query.q;
  //   mobile = mobile.trim();
  //   q = "+" + mobile;
  // }
  const search = {};
  search["status"] = req.params._status;
  search[req.query.field] = q;

  let order;
  try {
    order = await Orders.paginate(search, {
      limit: parseInt(req.query.limit),
      page: parseInt(req.query.page),
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: order,
    });

  } catch (error) {
    return res.status(500).send(error);
  }
};

orderController.get_vendor_query_search_orders = async (req, res) => {
  var ObjectId = mongoose.Types.ObjectId;
  const _id = new ObjectId(req.params._id);

  var q = req.query.q;

  // if (req.query.field === "mobile") {
  //   var mobile = req.query.q;
  //   mobile = mobile.trim();
  //   q = "+" + mobile;
  // }
  if (req.query.field === "c_id") {
    q = new ObjectId(req.query.q);
  }

  const search = {};
  search["products.vendor_id"] = _id;
  search["status"] = req.query.status;
  search[req.query.field] = q;

  try {
    const total = await Orders.countDocuments(search);
    const order = await Orders.aggregate([
      {
        $match: search,
      },
      {
        $project: {
          products: {
            $filter: {
              input: "$products",
              as: "item",
              cond: { $eq: ["$$item.vendor_id", _id] },
            },
          },
          sub_total_price: 1,
          shipping_charges: 1,
          entry_date: 1,
          status: 1,
          c_id: 1,
          total: 1,
          city: 1,
          mobile: 1,
          address: 1,
        },
      },
      {
        $skip: (req.query.page - 1) * req.query.limit,
      },
      {
        $limit: parseInt(req.query.limit),
      },
    ]);
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: order,
      total,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

orderController.get_all_orders_count = async (req, res) => {
  try {
    const pending_orders = await Orders.countDocuments({ status: "pending" });
    const delivered_orders = await Orders.countDocuments({
      status: "delivered",
    });
    const cancelled_orders = await Orders.countDocuments({ status: "cancel" });
    res.status(200).send({
      code: 200,
      message: "Successful",
      pending_orders,
      delivered_orders,
      cancelled_orders,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

orderController.get_vendor_orders_count = async (req, res) => {

  try {
    const pending_orders = await Orders.countDocuments({
      "products.vendor_id": req.params._id,
      status: "pending",
    });
    const delivered_orders = await Orders.countDocuments({
      "products.vendor_id": req.params._id,
      status: "delivered",
    });
    const cancelled_orders = await Orders.countDocuments({
      "products.vendor_id": req.params._id,
      status: "cancelled",
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      pending_orders,
      delivered_orders,
      cancelled_orders,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// put Methods
orderController.update_status = async (req, res) => {

  try {
    const _id = req.params._id;
    Orders.findOneAndUpdate(
      { _id: _id },
      {
        $set: { status: req.body.status },
      },
      {
        returnNewDocument: true,
      },
      function (error, result) {
        res.status(200).send({
          code: 200,
          message: "Order updated Successfully",
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

module.exports = orderController;

// In collection orders the array products get the index
// $unwind:{path:"$products", includeArrayIndex:"arrayindex"}