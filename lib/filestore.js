const fs = require('fs');

function clear(done) {
  fs.unlink('store.txt', done);
}

function store(data, done) {
  fs.appendFile('store.txt', data + '\n', done);
}

function retrieve(done) {
  fs.readFile('store.txt', { encoding: 'utf-8' }, function(err, data) {
    var lines = data.split('\n');
    lines.splice(-1);
    done(err, lines);
  });
}

module.exports = {clear, store, retrieve};
