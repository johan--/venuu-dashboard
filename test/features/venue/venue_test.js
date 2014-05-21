module('Integration: Venues', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

test("Venue information found", function () {
  visit("/venues/1");
  andThen(function () {
    ok(find("h3").text().indexOf('Murphy, Douglas and Sawayn 4') > -1, 'title found!');
  });
});