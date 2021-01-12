const Joi = require("joi");
const Product = require("../../../model/Product");
const mongoose = require("mongoose");
const schema = require("../validateSchema/schemaCreate");

function createProduct(req, res) {
  try {
    const dataParam = JSON.parse(req.query.collection);
    dataParam.forEach((obj, i) => {
      const validation = schema.validate(obj[i]);
      if (validation.error) {
        res.json({status: "Error"})
      } else {
        const product = new Product({
          _id: new mongoose.Types.ObjectId(),
          name: obj.name,
          category: obj.category,
          price: obj.price,
        });

        product
          .save()
          .then((result) => {
            console.log("Berhasil");
          })
          .catch((err) => {
            console.log("gagal");
          });
      }
    });

    res.json({ status: "Data Berhasil di Tambahkan" });
  } catch (error) {
    res.json({status: "Error"})
  }
}

module.exports = createProduct;
