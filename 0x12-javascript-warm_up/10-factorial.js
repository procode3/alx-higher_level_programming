#!/usr/bin/node

function factorial (a) {
  if (a === 1 || isNaN(a) || a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
console.log(factorial(Number(process.argv[2])));
