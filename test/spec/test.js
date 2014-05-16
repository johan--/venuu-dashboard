/*// in order to see the app running inside the QUnit runner
VenuuDashboard.rootElement = '#ember-testing';

// Common test setup
VenuuDashboard.setupForTesting();
VenuuDashboard.injectTestHelpers();


// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(VenuuDashboard, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});*/

test('basic test', function () {
  expect(1);
  ok(true, 'this had better work.');
});


/*test("/", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("h2").text(), "Welcome to Ember.js", "Application header is rendered");
  });
});*/