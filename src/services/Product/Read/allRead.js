const Product = require("../../../model/Product");

async function serviceAllRead(req, res) {
  try {
    Product.find({}, function (err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.json({ status: error });
  }
}

module.exports = serviceAllRead;
