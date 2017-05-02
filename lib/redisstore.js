const redis = require('redis');

const client = redis.createClient();

function clear(done) {
  client.del('tweets', done);
}

function store(data, done) {
  client.rpush('tweets', data, done);
}

function retrieve(done) {
  client.lrange('tweets', 0, 10000, done);
}

module.exports = {clear, store, retrieve};
