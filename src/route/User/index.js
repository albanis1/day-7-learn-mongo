const express = require("express");
const router = express.Router();
const mongoose = require("../../modules/mongo");
const User = require("../../model/User");
// const mongoose = require("../modules/mongo");
// const client = require("../../modules/redis");

const login = require('./login')

router.get("/login",login )

router.get("/", function (req, res) {
  User.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});



module.exports = router;