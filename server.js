
const PORT = process.env.PORT || 3000;
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    const app = express();
    const http = require('http');
    // const server = http.createServer(app);
    require('dotenv').config();

    require('dotenv').config();
    const errorHandler = require("./api/middleware/error-handler");
    const errorMessage = require("./api//middleware/error-message");
    const accessControls = require("./api//middleware/access-controls");
    const mongoose = require('mongoose');
    const cors = require('cors');
    const bodyParser = require('body-parser')
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(bodyParser.json());

    // connection to mongoose
    const mongoCon = process.env.mongoCon;

    const connect = async function () {
      return mongoose.connect(mongoCon, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    };

    (async () => {
      try {
        const connected = await connect();
      } catch (e) {
        console.log('Error happend while connecting to the DB: ', e.message)
      }
    })();
    const fs = require('fs');
    fs.readdirSync(__dirname + "/api/models").forEach(function (file) {
      require(__dirname + "/api/models/" + file);
    });

    // in case you want to serve images 
    app.use(express.static("public"));

    app.get('/api', function (req, res) {
      res.status(200).send({
        message: 'Express backend server'
      });
    });

    app.set('port', (process.env.PORT));

    app.use(accessControls);
    app.use(cors());

    const UsersRoutes = require('./api/routes/users.routes');
    const ProductsRoutes = require('./api/routes/products.routes');
    
    app.use("/api/users", UsersRoutes);
    app.use("/api/products", ProductsRoutes);

    app.get("*", (req, res) => {
      return handle(req, res);
    })

    
    app.use(errorHandler);
    app.use(errorMessage);

    // app.set('port', (process.env.PORT));
    // server.listen(app.get('port'));
    
    app.listen(PORT, err => {
      if (err) throw err;
      console.log(`> ready on port ${PORT}`);
    })

    console.log('listening on port', app.get('port'));
  })
  .catch(ex => {
    console.error(ex.stack);
  })