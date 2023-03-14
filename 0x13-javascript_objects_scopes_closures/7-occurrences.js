#!/usr/bin/node

let count = 0;
exports.nbOccurences = function (list, searchElement) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }
  return count;
};
