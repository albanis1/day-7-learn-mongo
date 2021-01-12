const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const morganBody = require("morgan-body");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.raw());

morganBody(app, {
  noColors: true,
  prettify: false,
  includeNewLine: true,
  stream: fs.createWriteStream(
    path.join(__dirname, "../middleware/access.log"),
    { flags: "a" }
  ),
});

const user = require("./User");
const product = require("./Product")
app.use("/user", user);
app.use("/product", product)


module.exports = app;
