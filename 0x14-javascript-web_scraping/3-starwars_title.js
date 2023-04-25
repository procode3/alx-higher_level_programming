#!/usr/bin/node

// Requiring the fs module

const req = require('request');

const urlPath = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

req(urlPath, (error, res, body) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  if (data.title) {
    console.log(data.title);
  }
});
