'use strict';

const got = require('got');

const BASE_URL='https://api.phish.net/v3';

let apiKey;

async function latest() {
  const response = await got(`${BASE_URL}/setlist/random?apikey=${apiKey}`);

  return {
    body: JSON.parse(response.body).response,
    response
  }
}

function client (options = {}) {
  apiKey = options.apiKey;

  return {
    latest
  }
}

module.exports = client;