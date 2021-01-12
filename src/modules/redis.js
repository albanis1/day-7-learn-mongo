const configRedis =  require('../../config/config.json')
const redis = require("redis");
const client = redis.createClient(configRedis.redis.port);

module.exports = client;