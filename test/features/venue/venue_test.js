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

test("First venue details can be edited", function () {
  visit('/venues/1/edit');
  fillIn('#title', 'Tuomiokirkko');
  fillIn('#pitch', 'Kaunis puukirkko');
  fillIn('#description', 'Ikävä paikka');
  click("#venue-button");
  andThen(function () {
    ok(find("h3").text().indexOf('Tuomiokirkko') > -1,
      'Title should be "Tuomiokirkko"');
    ok(find("p").text().indexOf('Kaunis puukirkko') > -1,
      'Pitch should be "Kaunis puukirkko"');
    ok(find("p").text().indexOf('Ikävä paikka') > -1,
      'Description should be "Ikävä paikka"');
  });
});

test("New venue can be added", function () {
  visit('/venues/new');
  fillIn('#title', 'Gurula');
  fillIn('#pitch', 'Panini-mies');
  fillIn('#description', 'Mukavat sohvat');
  click("#venue-button");
  andThen(function () {
    ok(find("h3").text().indexOf('Gurula') > -1,
      'Title should be "Tuomiokirkko"');
    ok(find("p").text().indexOf('Panini-mies') > -1,
      'Pitch should be "Kaunis puukirkko"');
    ok(find("p").text().indexOf('Mukavat sohvat') > -1,
      'Description should be "Ikävä paikka"');
  });
});

test("Venue can be deleted", function () {
  visit('/venues/1');
  click("#destroy-venue");
  andThen(function () {
    ok(find("li").text().indexOf('Murphy, Douglas and Sawayn 4') === -1,
      'Murphy, Douglas and Sawayn 4 deleted');
  });
});