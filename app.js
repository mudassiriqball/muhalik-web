const express = require("express");
const next = require("next");
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
//   }
// });
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true)
//   } else {
//     //reject file
//     cb({ message: 'Unsupported file format' }, false)
//   }
// }

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter
// });

aws.config.update({
  secretAccessKey: 'nKZSmn0MFET9TEtEy4kUrksDjzkMFBQdt+x6+aPc',
  accessKeyId: 'AKIAIYECX324S27WGWFQ',
  region: 'me-south-1'

});
const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'slider-images',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'TESTING_ME' });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
app
  .prepare()
  .then(() => {
    const app = express();
    const http = require("https");
    const server = http.createServer(app);
    require("dotenv").config();

    require("dotenv").config();
    const errorHandler = require("./api/middleware/error-handler");
    const errorMessage = require("./api//middleware/error-message");
    const accessControls = require("./api//middleware/access-controls");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const bodyParser = require("body-parser");
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(bodyParser.json());

    // for parsing multipart/form-data
    app.use(upload.array('myImage'));
    app.use(express.static("public"));

    // connection to mongoose
    const mongoCon = process.env.mongoCon;

    const connect = async function () {
      return mongoose.connect(mongoCon, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
    };

    (async () => {
      try {
        const connected = await connect();
      } catch (e) {
        console.log("Error happend while connecting to the DB: ", e.message);
      }
    })();
    const fs = require("fs");
    fs.readdirSync(__dirname + "/api/models").forEach(function (file) {
      require(__dirname + "/api/models/" + file);
    });

    // in case you want to serve images
    app.use(express.static("public"));

    app.get("/api", function (req, res) {
      res.status(200).send({
        message: "Express backend server"
      });
    });

    app.use(cors());
    app.use(accessControls);

    const UsersRoutes = require("./api/routes/users.routes");
    const ProductsRoutes = require("./api/routes/products.routes");
    const Products_CategoriesRoutes = require("./api/routes/categories.routes");
    const Sliders_Routes = require("./api/routes/sliders.routes");
    const Orders_Routes = require("./api/routes/orders.routes");

    app.use("/api/users", UsersRoutes);
    app.use("/api/products", ProductsRoutes);
    app.use("/api/categories", Products_CategoriesRoutes);
    app.use("/api/sliders", Sliders_Routes);
    app.use("/api/orders", Orders_Routes);

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.set("port", process.env.PORT);
    server.listen(app.get("port"));
    console.log("listening on port", app.get("port"));
  })
  .catch(ex => {
    console.error(ex.stack);
  });
