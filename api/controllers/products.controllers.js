// const productsController = {};
// const Products = require("../models/products.model");
// // const fs = require("fs");
// // const xlsx = require("xlsx");
// // var wb = xlsx.readFile("../prd_inv_template.xlsx");

// // fs.readdirSync(__dirname + "/models").forEach(function (file) {
// //   require(__dirname + "/models/" + file);
// // });

// productsController.getDate = async (req, res) => {

// };
// productsController.getAll = async (req, res) => {
//   let products;
//   try {
//     let merged = {};
//     const start = 0;
//     const length = 100;
//     products = await Products.paginate(merged, {
//       offset: parseInt(start),
//       limit: parseInt(length)
//     });
//     res.status(200).send({
//       code: 200,
//       message: "Successful",
//       data: products
//     });
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// };
// productsController.addProduct = async (req, res) => {

//   try {
//     var datetime = new Date();
//     var date=datetime.toISOString().slice(0,10);
//     const body = req.body;
//     req.body.product_entry_date=date;
//     const product = new Products(body);
//     const result = await product.save();
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

//   // product.image.data = fs.readFileSync('./img.png');
//     // imgPath = './img.png';
//     // product.image.data = fs.readFileSync(imgPath);
//     // product.image.data = body.image;
//     // product.image.contentType = 'image/png';
// };

// productsController.bulkupload = async (req, res) => {
//   console.log("Check:",req.body);
//   var datetime = new Date();
//   var date=datetime.toISOString().slice(0,10);
//     // const body = req.body;
//     // req.body.product_entry_date=date;
//   try {
//     // var ws = wb.Sheets["Worksheet"];
//     // var data = xlsx.utils.sheet_to_json(ws);
    
//     // data.forEach(element => {
//     //   element.product_entry_date=date;
//     //   const product = new Products(element);
//     //   product.save();
//     // });
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
// module.exports = productsController;

// productsController.getSingleProduct = async (req, res) => {
//   let product;
//   try {
//     const _id = req.params._id;
//     product = await products.findOne({ _id: _id });
//     res.status(200).send({
//       code: 200,
//       message: "Successful",
//       data: product
//     });
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// };

// productsController.deleteProduct = async (req, res) => {
//   if (!req.params._id) {
//     Fu;
//     res.status(500).send({
//       message: "ID missing"
//     });
//   }
//   try {
//     const _id = req.params._id;

//     const result = await Products.findOneAndDelete({
//       _id: _id
//     });

//     res.status(200).send({
//       code: 200,
//       message: "Deleted Successfully"
//     });
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// };

// productsController.updateProduct = async (req, res) => {
//   if (!req.params._id) {
//     res.status(500).send({
//       message: "ID missing"
//     });
//   }
//   try {
//     const _id = req.params._id;
//     let updates = req.body;
//     runUpdate(_id, updates, res);
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// };

// async function runUpdate(_id, updates, res) {
//   try {
//     const result = await Products.updateOne(
//       {
//         _id: _id
//       },
//       {
//         $set: updates
//       },
//       {
//         upsert: true,
//         runValidators: true
//       }
//     );

//     {
//       if (result.nModified == 1) {
//         res.status(200).send({
//           code: 200,
//           message: "Updated Successfully"
//         });
//       } else if (result.upserted) {
//         res.status(200).send({
//           code: 200,
//           message: "Created Successfully"
//         });
//       } else {
//         res.status(422).send({
//           code: 422,
//           message: "Unprocessible Entity"
//         });
//       }
//     }
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// }
// async function runUpdateById(id, updates, res) {
//   try {
//     const result = await products.updateOne(
//       {
//         id: id
//       },
//       {
//         $set: updates
//       },
//       {
//         upsert: true,
//         runValidators: true
//       }
//     );

//     if (result.nModified == 1) {
//       res.status(200).send({
//         code: 200,
//         message: "Updated Successfully"
//       });
//     } else if (result.upserted) {
//       res.status(200).send({
//         code: 200,
//         message: "Created Successfully"
//       });
//     } else {
//       res.status(200).send({
//         code: 200,
//         message: "Task completed successfully"
//       });
//     }
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).send(error);
//   }
// }


const productsController = {};
const Products = require("../models/products.model");
const fs = require("fs");
//const xlsx = require("xlsx");
//var wb = xlsx.readFile("../prd_inv_template.xlsx");


productsController.getDate = async (req, res) => {

};
productsController.getAll = async (req, res) => {
  let products;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    products = await Products.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: products
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.addProduct = async (req, res) => {
  try {
    var datetime = new Date();
    var date=datetime.toISOString().slice(0,10);
    req.body.data.product_entry_date=date;
    const product = new Products(req.body.data);
    const result = await product.save();
    res.status(200).send({
      code: 200,
      message: "Product Added Successfully"
    });
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .send({ message: "Product Added Successfully", error });
  }

  // product.image.data = fs.readFileSync('./img.png');
    // imgPath = './img.png';
    // product.image.data = fs.readFileSync(imgPath);
    // product.image.data = body.image;
    // product.image.contentType = 'image/png';
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
      data: product
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
      message: "ID missing"
    });
  }
  try {
    const _id = req.params._id;

    const result = await Products.findOneAndDelete({
      _id: _id
    });

    res.status(200).send({
      code: 200,
      message: "Deleted Successfully"
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

productsController.updateProduct = async (req, res) => {
  if (!req.params._id) {
    res.status(500).send({
      message: "ID missing"
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
        _id: _id
      },
      {
        $set: updates
      },
      {
        upsert: true,
        runValidators: true
      }
    );

    {
      if (result.nModified == 1) {
        res.status(200).send({
          code: 200,
          message: "Updated Successfully"
        });
      } else if (result.upserted) {
        res.status(200).send({
          code: 200,
          message: "Created Successfully"
        });
      } else {
        res.status(422).send({
          code: 422,
          message: "Unprocessible Entity"
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
        id: id
      },
      {
        $set: updates
      },
      {
        upsert: true,
        runValidators: true
      }
    );

    if (result.nModified == 1) {
      res.status(200).send({
        code: 200,
        message: "Updated Successfully"
      });
    } else if (result.upserted) {
      res.status(200).send({
        code: 200,
        message: "Created Successfully"
      });
    } else {
      res.status(200).send({
        code: 200,
        message: "Task completed successfully"
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
}
module.exports = productsController;