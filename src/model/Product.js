const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    category: String,
    price: Number
})

module.exports = mongoose.model('Product', productSchema);