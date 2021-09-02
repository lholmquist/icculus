'use strict';

const got = require('got');

const BASE_URL='https://api.phish.net/v3';

let apiKey;

async function sendRequest(uri) {
  const response = await got(`${BASE_URL}/${uri}?apikey=${apiKey}`);

  return {
    body: JSON.parse(response.body).response,
    response
  }
}

function random() {
  return sendRequest('setlist/random');
}

function latest() {
  return sendRequest('setlist/latest');
}

function tiph() {
  return sendRequest('setlist/tiph');
}

function recent() {
  return sendRequest('setlist/recent');
}

function progress() {
  return sendRequest('setlist/progress');
}

function client (options = {}) {
  apiKey = options.apiKey;

  return {
    setlists: {
      random,
      latest,
      tiph,
      recent,
      progress
    }
  }
}

module.exports = client;