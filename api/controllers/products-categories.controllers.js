
const products_categoriesController = {};
const Products_Categories = require("../models/products-categories.model");

products_categoriesController.addProduct_Category = async (req, res) => {
  try {
    var datetime = new Date();
    var date = datetime.toISOString().slice(0, 10);
    const body = req.body.data;
    body.product_entry_date = date;
    const product_category = new Products_Categories(body);
    const result = await product_category.save();
    res.status(200).send({
      code: 200,
      message: "Products_Categories Added Successfully"
    });
    return res
      .status(500)()
      .send({ message: "Products_Categories Added Successfully" });
  } catch (error) {
    console.log("error", error);
  }

  // product.image.data = fs.readFileSync('./img.png');
  // imgPath = './img.png';
  // product.image.data = fs.readFileSync(imgPath);
  // product.image.data = body.image;
  // product.image.contentType = 'image/png';
};

products_categoriesController.getAll = async (req, res) => {
  let products_category;
  let categories = [];
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    products_category = await Products_Categories.paginate(merged, {
      offset: parseInt(start),
      limit: parseInt(length)
    });
    var getdata = products_category.docs;
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

module.exports = products_categoriesController;