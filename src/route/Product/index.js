const express = require("express");
const router = express.Router();

const client = require("../../modules/redis");

const readProduct = require("./CRUD/readProduct");
const createProduct = require("./CRUD/createProduct");
const deleteProduct = require("./CRUD/deleteProduct");
const updateProduct = require("./CRUD/updateProduct");

router.get("/read", cache, readProduct);
router.post("/create", createProduct);
router.delete("/delete", deleteProduct);
router.put("/update", updateProduct);

function cache(req, res, next) {
  const hash = req.query.id;
  if (hash) {
    client.get(hash, (err, data) => {
      if (err) throw err;
      if (data != null) {
        res.json(JSON.parse(data));
      } else {
        next();
      }
    });
  } else {
    next();
  }
}

module.exports = router;
