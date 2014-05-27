module('Spec: Storage', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

test('Venue model should load fields with camelCase', function () {
  var store = VenuuDashboard.__container__.lookup('store:main');

  Ember.run(function () {
    store.find('venue', 1).then(function (venue) {
      notEqual(venue.get('rentPerDay'), null, 'Rent per day should not be null');
    });
  });
});
