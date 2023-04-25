#!/usr/bin/node

// Getting the list of all completed tasks
const req = require('request');

const urlPath = process.argv[2] + '?completed=true';

req(urlPath, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  const obj = {};
  for (let j = 0; j < data.length; j++) {
    if (!obj[data[j].userId]) {
      obj[data[j].userId] = 1;
    } else {
      obj[data[j].userId] += 1;
    }
  }
  console.log(obj);
});
