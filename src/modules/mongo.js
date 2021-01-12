const mongoose = require('mongoose');
const urlMongo = require('../../config/config.json')

mongoose.connect(urlMongo.mongoConfig.url, { useNewUrlParser: true, useUnifiedTopology: true});


mongoose.connection
.once("open", ()=>console.log("Connected"))
.on("error", error =>{
    console.log("error", error)
})

module.exports = mongoose;