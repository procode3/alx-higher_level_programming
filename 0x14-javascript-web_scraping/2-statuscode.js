#!/usr/bin/node

// Requiring the fs module

const req = require('request');

const urlPath = process.argv[2];

req(urlPath, (error, res, body) => {
  if (error) {
    console.log(error);
  }
  console.log('code:', res.statusCode);
});
