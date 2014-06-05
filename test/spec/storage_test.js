module('Spec: Storage', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
  }
});

asyncTest('Venue model should load fields with camelCase', function () {
  expect(1);

  var store = VenuuDashboard.__container__.lookup('store:main');

  Ember.run(function () {
    store.find('venue', 1).then(function (result) {
      start();
      notEqual(result.get('rentPerDay'), null, 'Rent per day should not be null');
    });
  });

  VenuuDashboard.reset(); //Magic fix

});
