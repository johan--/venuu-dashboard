module('Integration: Venue groups', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

test("Location page title found", function () {
  visit('/');
  andThen(function () {
    ok(find("h4").text().indexOf('Kohteet') > -1, 'Locations title not found!');
  });
});

test("First location name found", function () {
  visit('/');
  andThen(function () {
    ok(find("li").text().indexOf('Kongressikeskus') > -1, 'Kongressikeskus not found!');
  });
});

test("First location details found", function () {
  visit('/location/1');
  andThen(function () {
    ok(find("p").text().indexOf('Betonimiehenkatu 1') > -1, 'Address not found!');
  });
});