const Product = require("../../../model/Product");

async function serviceSingleUpdate(id,name,price,category, req, res) {
  try {
    Product.where({ _id: id }).update(
      {
        $set: {
          name: name,
          price: price,
          category: category,
        },
      },
      async function (err, result) {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  } catch (error) {
    res.json(error);
  }
}

module.exports = serviceSingleUpdate;
