#!/usr/bin/node

function sum(a, b){
	return a + b;
}
console.log(sum(Number(process.argv[2]), Number(process.argv[3])));

