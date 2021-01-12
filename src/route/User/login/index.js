// const client = require("../../modules/redis");
const Joi = require("joi");
// const mysql = require("../../modules/mysql");
// const jwt = require('jsonwebtoken');
// const UNIQUE_TOKEN = require('../../../config/config.json')
const User = require("../../../model/User");
const schema = require("../validateSchema/schemaLogin");
const serviceLogin = require("../../../services/User/login");
async function login(req, res) {
  const dataParam = {
    email: req.param("email"),
    password: req.param("password"),
  };
  const validation = schema.validate(dataParam);
  if (validation.error) {
    res.json({ status: validation });
  } else {
    try {
      serviceLogin(dataParam.email, dataParam.password, req, res);
    } catch (error) {
      res.json({ status: error });
    }
  }
}

module.exports = login;
