const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();
const errorHandler = require("./node/middleware/error-handler");
const errorMessage = require("./node/middleware/error-message");
const accessControls = require("./node/middleware/access-controls");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json()); // to support JSON-encoded bodies

// Requiring Routes

const UsersRoutes = require('./node/routes/users.routes');
const ProductsRoutes = require('./node/routes/products.routes');

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

// mongoose.connect(mongoCon, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });


const fs = require('fs');
fs.readdirSync(__dirname + "/node/models").forEach(function (file) {
  require(__dirname + "/node/models/" + file);
});

// in case you want to serve images 
app.use(express.static("public"));

app.get('/', function (req, res) {
  res.status(200).send({
    message: 'Express backend server'
  });
});

app.set('port', (process.env.PORT));

app.use(accessControls);
app.use(cors());

// Routes which should handle requests
app.use("/users", UsersRoutes);
app.use("/products", ProductsRoutes);

app.use(errorHandler);

app.use(errorMessage);

server.listen(app.get('port'));
console.log('listening on port', app.get('port'));
