#!/usr/bin/node

const obj = {};
const dict = require('./101-data.js').dict;
for (const key in dict) {
  if (obj[dict[key]] === undefined) {
    obj[dict[key]] = [key];
  } else {
    obj[dict[key]].push(key);
  }
}
console.log(obj);
