const Joi = require("joi");


const schemaLogin = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  module.exports = schemaLogin;