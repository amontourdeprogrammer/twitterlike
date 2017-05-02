const expect = require('expect.js');
const execFileSync = require('child_process').execFileSync;

const {store, retrieve, clear} = require('../lib/datastore');

describe("twitterlike", function() {
  beforeEach(function() {
    clear();
  });

  it("persists data", function() {
    store("some data");

    const retrieved = retrieve();

    expect(retrieved).to.eql(["some data"]);
  });

  it("persists data across processes", function() {
    execFileSync('node', ['cli.js', 'first bit'], {encoding: 'utf-8'});
    execFileSync('node', ['cli.js', 'second bit'], {encoding: 'utf-8'});

    const output = execFileSync('node', ['cli.js'], {encoding: 'utf-8'});

    expect(output).to.be('first bit\nsecond bit\n');
  });

  it("persists several bits of data", function() {
    store("first bit");
    store("second bit");

    const retrieved = retrieve();

    expect(retrieved).to.eql(["first bit", "second bit"]);
  });
});
