module('Integration: Venues', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
    VenuuDashboard.reset();
  }
});

test('Venue page title found', function () {
  visit('/venue');
  andThen(function () {
    ok(find('h4').text().indexOf('Tilasi') > -1,
      'Venues header should exist');
  });
});

test('First venue name found', function () {
  visit('/venue');
  andThen(function () {
    ok(find('li').text().indexOf('Murphy, Douglas and Sawayn 4') > -1,
      'Venue Murphy, Douglas and Sawayn 4 should be the first venue');
  });
});

test('First venue details found', function () {
  visit('/venue/1');
  andThen(function () {
    ok(find('#pitch').val().indexOf('Yhden/kahden lauseen kuvaus tilasta.') > -1,
      'Venue pitch should exist');
  });
});

test('First venue details can be edited', function () {
  visit('/venue/1');
  fillIn('#title', 'Tuomiokirkko');
  fillIn('#pitch', 'Kaunis puukirkko');
  fillIn('#description', 'Ikävä paikka');
  click('#save');
  andThen(function () {
    ok(find('#title').val().indexOf('Tuomiokirkko') > -1,
      'Title should be "Tuomiokirkko"');
    ok(find('#pitch').val().indexOf('Kaunis puukirkko') > -1,
      'Pitch should be "Kaunis puukirkko"');
    ok(find('#description').val().indexOf('Ikävä paikka') > -1,
      'Description should be "Ikävä paikka"');
  });
});

test('New venue can be added', function () {
  visit('/venue/new');
  fillIn('#title', 'Gurula');
  fillIn('#pitch', 'Panini-mies');
  fillIn('#description', 'Mukavat sohvat');
  click('#save');
  andThen(function () {
    ok(find('#title').val().indexOf('Gurula') > -1,
      'Title should be "Tuomiokirkko"');
    ok(find('#pitch').val().indexOf('Panini-mies') > -1,
      'Pitch should be "Kaunis puukirkko"');
    ok(find('#description').val().indexOf('Mukavat sohvat') > -1,
      'Description should be "Ikävä paikka"');
  });
});

test('Venue can be deleted', function () {
  visit('/venue/1');
  click('#destroy');
  andThen(function () {
    ok(find('li').text().indexOf('Murphy, Douglas and Sawayn 4') === -1,
      'Venue Murphy, Douglas and Sawayn 4 should be the first venue');
  });
});

//NAVBAR

test('Going to venues should work', function () {
  visit('/');
  click('#navbar-venues');
  andThen(function () {
    ok(find('h4').text().indexOf('Tilasi') > -1,
      'Venues title should exist');
  });
});

test('Going back to venues when creating a venue should work', function () {
  visit('/venue/new');
  click('#navbar-venue-groups');
  andThen(function () {
    ok(find('h4').text().indexOf('Tilasi') > -1,
      'Venues title should exist');
  });
});

test('Going back to venues when editing a venue should work', function () {
  visit('/venue/1');
  click('#navbar-venue-groups');
  andThen(function () {
    ok(find('h4').text().indexOf('Tilasi') > -1,
      'Venues title should exist');
  });
});
