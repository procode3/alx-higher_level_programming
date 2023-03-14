#!/usr/bin/node

let c = [];
exports.esrever = function (list) {
  for (let i = list.length - 1; i >= 0; i--) {
    c.push(list[i])
  }
  return c;
};
