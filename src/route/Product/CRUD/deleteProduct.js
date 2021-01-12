const Product = require("../../../model/Product");

function deleteProduct(req, res) {
  
    const arrayID = JSON.parse(req.query.id);
    Product.remove(
      { _id: { $in: arrayID } },
        function (err, result) {
          if (err) {
            res.json(err);
          } else {
            res.json(result)
          }
        }
      );
}

module.exports = deleteProduct;
