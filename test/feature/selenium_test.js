var assert = require('assert');

describe('Browser test', function () {

  it('browser ok', function () {
    assert.ok(this.browser);
  });

});

describe('Walking skeletor test', function () {

  describe('has correct content', function () {

    var browser;

    before(function () {
      browser = this.browser;
      browser.get('http://localhost:9001/dashboard/')
    });

    it('has correct title', function (done) {
      browser.title()
        .then(function (title) {
          assert.equal(title, 'Venuu');
        }).then(done, done);
    });
  });
});