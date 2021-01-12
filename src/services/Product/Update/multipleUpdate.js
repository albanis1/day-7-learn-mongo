const Product = require("../../../model/Product");

async function serviceMultipleUpdate(arrayCategory, price, req, res) {
  try {
    Product.where({ category: { $in: arrayCategory } }).updateMany(
      {
        $set: {
          price: price,
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

module.exports = serviceMultipleUpdate;
