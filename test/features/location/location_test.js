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
    ok(find("h4").text().indexOf('Kohteet') > -1, 'Locations title found!');
  });
});

test("First location name found", function () {
  visit('/');
  andThen(function () {
    ok(find("li").text().indexOf('Kongressikeskus') > -1, 'Kongressikeskus found!');
  });
});

test("First location details found", function () {
  visit('/location/1');
  andThen(function () {
    ok(find("p").text().indexOf('Betonimiehenkatu 1') > -1, 'Address found!');
  });
});

test("First location details can be edited", function () {
  visit('/location/1/edit');
  fillIn('#name', 'Tuomiokirkko');
  fillIn('#city', 'Helsinki');
  fillIn('#address', 'Senaatintori');
  click("#venue-group-button");
  andThen(function () {
    ok(find("h3").text().indexOf('Tuomiokirkko') > -1, 'New name not found!');
    ok(find("p").text().indexOf('Senaatintori') > -1, 'New address not found!');
    ok(find("p").text().indexOf('Helsinki') > -1, 'New city not found!');
  });
});

test("New location can be added", function () {
  visit('/new');
  fillIn('#name', 'Chemicum');
  fillIn('#city', 'Helsinki');
  fillIn('#address', 'A.I. Virtasen aukio 1');
  click("#venue-group-button");
  andThen(function () {
    ok(find("h3").text().indexOf('Chemicum') > -1, 'New name not found!');
    ok(find("p").text().indexOf('A.I. Virtasen aukio 1') > -1, 'New address not found!');
    ok(find("p").text().indexOf('Helsinki') > -1, 'New city not found!');
  });
});

test("Location can be deleted", function () {
  visit('/location/1');
  click("#destroy-venue-group");
  andThen(function () {
    ok(find(".venue-group-venues").text().indexOf('Kongressikeskus') === -1, 'Kongressikeskus deleted!');
  });
});