const expect = require('expect.js');
const execFileSync = require('child_process').execFileSync;

const {store, retrieve, clear} = require('../lib/datastore');

describe("twitterlike", function() {
  beforeEach(function(done) {
    clear(done);
  });

  it("persists data", function(done) {
    store("some data", function() {
      retrieve(function(err, retrieved) {
        expect(retrieved).to.eql(["some data"]);
        done();
      });
    });
  });

  it("persists data across processes", function() {
    execFileSync('node', ['cli.js', 'first bit'], {encoding: 'utf-8'});
    execFileSync('node', ['cli.js', 'second bit'], {encoding: 'utf-8'});

    const output = execFileSync('node', ['cli.js'], {encoding: 'utf-8'});

    expect(output).to.be('first bit\nsecond bit\n');
  });

  it("persists several bits of data", function(done) {
    store("first bit", function() {
      store("second bit", function() {
        retrieve(function(err, retrieved) {
          expect(retrieved).to.eql(["first bit", "second bit"]);
          done();
        })
      })
    })
  });
});
