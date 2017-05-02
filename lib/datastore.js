const fs = require('fs');

function store(data) {
  fs.writeFileSync('store.txt', data);
}

function retrieve() {
  return fs.readFileSync('store.txt', { encoding: 'utf-8' });
}

module.exports = {store, retrieve};
