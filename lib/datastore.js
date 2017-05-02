const fs = require('fs');

function clear() {
  fs.unlinkSync('store.txt');
}

function store(data) {
  fs.appendFileSync('store.txt', data + '\n');
}

function retrieve() {
  var lines = fs.readFileSync('store.txt', { encoding: 'utf-8' }).split('\n');
  lines.splice(-1);
  return lines;
}

module.exports = {clear, store, retrieve};
