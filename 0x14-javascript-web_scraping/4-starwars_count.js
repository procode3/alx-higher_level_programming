#!/usr/bin/node

// Requiring the fs module

const req = require('request');

const urlPath = process.argv[2];

req(urlPath, (error, res, body) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  let count = 0;
  for (let i = 0; i < data.results.length; i++) {
    const chars = data.results[i].characters;
    for (let j = 0; j < chars.length; j++) {
      if (chars[j].includes('18')) {
        count = count + 1;
      }
    }
  }
  console.log(count);
});
