module('Integration: Venues', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

test("Venue page title found", function () {
  visit('/venues');
  andThen(function () {
    ok(find("h4").text().indexOf('Tilasi') > -1,
      'Venues header should exist');
  });
});

test("First venue name found", function () {
  visit('/venues');
  andThen(function () {
    ok(find("li").text().indexOf('Murphy, Douglas and Sawayn 4') > -1,
      'Venue Murphy, Douglas and Sawayn 4 should be the first venue');
  });
});

test("First venue details found", function () {
  visit('/venues/1');
  andThen(function () {
    ok(find(".m-ingress").text().indexOf('Yhden/kahden lauseen kuvaus tilasta.') > -1,
      'Venue pitch should exist');
  });
});