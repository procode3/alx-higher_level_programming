#!/usr/bin/node

// Requiring the fs module

const fs = require('fs');
const filePath = process.argv[2];
const info = process.argv[3] + '\n';

fs.writeFile(filePath, info, (err) => {
  if (err) {
    console.log(err);
  }
});
