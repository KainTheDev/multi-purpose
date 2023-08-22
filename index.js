const fs = require('fs');
const path = require('path');

const functionFiles = fs.readdirSync(path.join(__dirname, 'functions'));
const functions = {};

functionFiles.forEach(fileName => {
  const functionName = path.parse(fileName).name;
  functions[functionName] = require(path.join(__dirname, 'functions', fileName));
});
module.exports = functions;
