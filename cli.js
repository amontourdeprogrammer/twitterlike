const {store, retrieve} = require('./lib/datastore');

if(process.argv.length > 2) {
  const data = process.argv[2];
  console.log("Storing", data);
  store(data);
}

console.log("Stored data:", retrieve());
