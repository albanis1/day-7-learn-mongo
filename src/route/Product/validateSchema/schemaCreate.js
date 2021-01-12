const Joi = require("joi");


const schemaCreate = Joi.object().keys({
    name: Joi.string().email().required(),
    category: Joi.string().required(),
    price: Joi.number().required()
  });

  module.exports = schemaCreate;