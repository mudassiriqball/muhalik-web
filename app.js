
// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== "production";
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();
// const port = process.env.PORT || 5000;
// var multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/');
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// const upload = multer({
//   storage: storage,
// });

// nextApp.prepare()
//   .then(() => {
//     const app = express();
//     const http = require('http');
//     const server = http.createServer(app);
//     require('dotenv').config();
//     var multer = require("multer");
//     var upload = multer();

//     require('dotenv').config();
//     const errorHandler = require("./api/middleware/error-handler");
//     const errorMessage = require("./api/middleware/error-message");
//     const accessControls = require("./api/middleware/access-controls");
//     const mongoose = require('mongoose');
//     const cors = require('cors');
//     const bodyParser = require('body-parser')
//     app.use(
//       bodyParser.urlencoded({
//         extended: true
//       })
//     );
//     app.use(bodyParser.json());

//     // for parsing multipart/form-data
//     // app.use(upload.array());
//     // app.use(express.static("public"));
//     app.use(upload.array('product_image_link'));
//     app.use(express.static("public"));

//     // connection to mongoose
//     const mongoCon = process.env.mongoCon;

//     const connect = async function () {
//       return mongoose.connect(mongoCon, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//     };

//     (async () => {
//       try {
//         const connected = await connect();
//       } catch (e) {
//         console.log('Error happend while connecting to the DB: ', e.message)
//       }
//     })();
//     const fs = require('fs');
//     fs.readdirSync(__dirname + "/api/modals").forEach(function (file) {
//       require(__dirname + "/api/modals/" + file);
//     });

//     // in case you want to serve images 
//     app.use(express.static("public"));

//     app.get('/api', function (req, res) {
//       res.status(200).send({
//         message: 'Express backend server'
//       });
//     });

//     // app.set('port', (process.env.PORT));

//     app.use(accessControls);
//     app.use(cors());

//     const UsersRoutes = require('./api/routes/users.routes');
//     const ProductsRoutes = require('./api/routes/products.routes');
//     const CategoriesRoutes = require('./api/routes/categories.routes');

//     app.use("/api/users", UsersRoutes);
//     app.use("/api/products", ProductsRoutes);
//     app.use("/api/categories", CategoriesRoutes);


//     app.get("*", (req, res) => {
//       return handle(req, res);
//     })

//     app.use(errorHandler);
//     app.use(errorMessage);
//     server.listen(port)

//     // app.listen(PORT, err => {
//     //   if (err) throw err;
//     //   console.log(`> ready on port ${PORT}`);
//     // })

//     console.log('listening on port', port);
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//   })

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 5000;
var multer = require("multer");
const path = require("path");
// const upload=multer({dest:'images/'})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});
nextApp
  .prepare()
  .then(() => {
    const app = express();
    const http = require("http");
    const server = http.createServer(app);

    require("dotenv").config();
    const errorHandler = require("./api/middleware/error-handler");
    const errorMessage = require("./api/middleware/error-message");
    const accessControls = require("./api/middleware/access-controls");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const bodyParser = require("body-parser");
    app.use(
      bodyParser.urlencoded({
        extended: true,
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
        useUnifiedTopology: true,
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
    fs.readdirSync(__dirname + "/api/modals").forEach(function (file) {
      require(__dirname + "/api/modals/" + file);
    });

    // in case you want to serve images
    // app.use(express.static("public"));

    app.get("/api", function (req, res) {
      res.status(200).send({
        message: "Express backend server",
      });
    });

    // app.set('port', (process.env.PORT));

    app.use(accessControls);
    app.use(cors());

    const UsersRoutes = require("./api/routes/users.routes");
    const ProductsRoutes = require("./api/routes/products.routes");
    const CategoriesRoutes = require("./api/routes/categories.routes");

    app.use("/api/users", UsersRoutes);
    app.use("/api/products", ProductsRoutes);
    app.use("/api/categories", CategoriesRoutes);

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.use(errorHandler);
    app.use(errorMessage);
    server.listen(port);

    // app.listen(PORT, err => {
    //   if (err) throw err;
    //   console.log(`> ready on port ${PORT}`);
    // })

    console.log("listening on port", port);
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
