const { Client } = require('twitter-api-sdk');
require('dotenv').config();

const client = new Client(process.env.BEARER_TOKEN);

module.exports = client