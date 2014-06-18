module('Integration: Venues', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
    //VenuuDashboard.reset();
  }
});

test('Venue page title found', function () {
  visit('/venue');
  andThen(function () {
    contains(find('h4').text(), 'Tilasi',
      'Venues header should exist');
  });
});

test('First venue name found', function () {
  visit('/venue');
  andThen(function () {
    contains(find('li').text(), 'Murphy, Douglas and Sawayn 4',
      'Venue Murphy, Douglas and Sawayn 4 should be the first venue');
  });
});

test('First venue details found', function () {
  visit('/venue/1');
  andThen(function () {
    contains(find('#pitch').val(), 'Yhden/kahden lauseen kuvaus tilasta.',
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
    contains(find('#title').val(), 'Tuomiokirkko',
      'Title should be "Tuomiokirkko"');
    contains(find('#pitch').val(), 'Kaunis puukirkko',
      'Pitch should be "Kaunis puukirkko"');
    contains(find('#description').val(), 'Ikävä paikka',
      'Description should be "Ikävä paikka"');
  });
});

test('New venue can be added', function () {
  visit('/venue/new');
  andThen(function () {
    // http://plnkr.co/edit/ODvlUOLYMxe6VPx1Zjlw?p=preview
    find('#venue-group').val(1).change();
    fillIn('#title', 'Gurula');
    fillIn('#pitch', 'Panini-mies');
    fillIn('#description', 'Mukavat sohvat');
    click('#save');
    andThen(function () {
      contains(find('#title').val(), 'Gurula',
        'Title should be "Gurula"');
      contains(find('#pitch').val(), 'Panini-mies',
        'Pitch should be "Panini-mies"');
      contains(find('#description').val(), 'Mukavat sohvat',
        'Description should be "Mukavat sohvat"');
    });
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
