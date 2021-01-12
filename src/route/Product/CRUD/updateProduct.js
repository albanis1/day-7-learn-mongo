
const Joi = require("joi");

const serviceSingleUpdate = require("../../../services/Product/Update/singleUpdate");
const serviceMultipleUpdate = require("../../../services/Product/Update/multipleUpdate");
async function updateProduct(req, res) {
  const dataParam = {
    id: req.param("id"),
    name: req.param("name"),
    price: req.param("price"),
    category: req.param("category"),
  };
  const collectionData = req.query.collection;

  if (collectionData) {
    const multiParam = JSON.parse(collectionData);
    serviceMultipleUpdate(multiParam, dataParam.price, req, res);
  } else {
    serviceSingleUpdate(
      dataParam.id,
      dataParam.name,
      dataParam.price,
      dataParam.category,
      req,
      res
    );
  }
}

module.exports = updateProduct;
