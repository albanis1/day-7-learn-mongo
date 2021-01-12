const Product = require("../../../model/Product");
const client = require("../../../modules/redis")
async function serviceReadByID(arrayID, req, res) {
  try {
    Product.find({ _id: { $in: arrayID } }, function (err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
        const hash = req.query.id;
        const mydata = JSON.stringify(result);
        client.setex(hash, 60, mydata);
      }
    });
  } catch (error) {
    res.json({ status: error });
  }
}

module.exports = serviceReadByID;
