#!/usr/bin/node

// Requiring the fs module
const req = require('request');
const fs = require('fs');
const urlPath = process.argv[2];
const filePath = process.argv[3];

req(urlPath, (error, res, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
