const expect = require('expect.js');
const execFileSync = require('child_process').execFileSync;

const {store, retrieve} = require('../lib/datastore');

describe("twitterlike", function() {
  it("persists data", function() {
    store("some data");

    const retrieved = retrieve();

    expect(retrieved).to.be("some data");
  });

  it("persists data across processes", function() {
    execFileSync('node', ['cli.js', 'some data'], {encoding: 'utf-8'});

    const output = execFileSync('node', ['cli.js'], {encoding: 'utf-8'});

    expect(output).to.be('Stored data: some data\n');
  });
});
