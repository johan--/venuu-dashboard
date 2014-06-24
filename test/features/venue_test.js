module('Integration: Venues', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
    //VenuuDashboard.reset();
  }
});

var testVenue = {
  title: 'Tuomiokirkko',
  pitch: 'Kaunis puukirkko',
  description: 'Ikävä paikka'
};

// this should equal the first seed (id:1) in seeds.rb (backend)
var seedVenue = {
  title: 'Murphy, Douglas and Sawayn 4',
  pitch: 'Yhden/kahden lauseen kuvaus tilasta.',
  description: 'Lorem ipsum Quis enim ad esse exercitation dolore laborum ' +
               'amet est id officia dolor irure incididunt nostrud in velit.'
};

test('Venue page title found', function () {
  visit('/venue');
  andThen(function () {
    contains(find('h2').text(), 'Tilasi',
      'Venues header should exist');
  });
});

test('First venue name found', function () {
  visit('/venue');
  andThen(function () {
    contains(
      find('.m-venue-box h6').first().text(),
      seedVenue.title,
      'Venue ' + seedVenue.title + ' should be the first venue'
    );
  });
});

test('First venue information found', function () {
  visit('/venue/1');
  andThen(checkFields(seedVenue));
});

test('First venue details can be edited', function () {
  visit('/venue/1');
  fillFields(testVenue);
  click('#save');

  visit('/venue/1');
  andThen(checkFields(testVenue));
});

test('New venue can be added', function () {
  visit('/venue/wizard');
  select('venue-group', 1);
  fillFields(testVenue);
  click('#save');

  visit('/venue/' + (venuesSeeded + 1));
  andThen(checkFields(testVenue));
});


test('Venue can be deleted', function () {
  visit('/venue/1');
  click('#destroy');

  andThen(function () {
    doesNotContain(
      find('.m-venue-box h6').text(),
      seedVenue.title,
      'Venue ' + seedVenue.title + ' should be the first venue'
    );
  });
});

test('VenueTypes can be edited', function () {
  visit('/venue/1/types');

  select('venueTypes', [1, 2]);

  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    checkSelection('venueTypes', [
      [1, 'Juhlasali'],
      [2, 'Tapahtumatila']
    ]);
  });
});

test('VenueTypes can be removed', function () {
  visit('/venue/1/types');


  select('venueTypes', []);

  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    ok(!find('#venueTypes').val(), 'Venue should not have venuetypes!');
  });
});

test('VenueEvents can be edited', function () {
  visit('/venue/1/types');

  select('eventTypes', [1, 2]);

  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    checkSelection('eventTypes', [
      [1, 'Häät'],
      [2, 'Juhlat']
    ]);
  });
});

test('VenueEvents can be removed', function () {
  visit('/venue/1/types');

  select('eventTypes', []);

  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    ok(!find('#eventTypes').val(), 'Venue should not have event types!');
  });
});

test('VenueServices can be edited', function () {
  visit('/venue/1/services');

  select('venueServices', [6, 15, 36]);

  andThen(function () {
    click('#save');
    visit('/venue/1/services');
    checkSelection('venueServices', [
      [6, 'WiFi'],
      [15, 'Terassi'],
      [36, 'Pelikonsoli']
    ]);
    ok(find('#venueServices').val().length === 3, 'Venue should have 3 services!');
  });
});

test('VenueServices can be removed', function () {
  visit('/venue/1/services');

  select('venueServices', []);

  andThen(function () {
    click('#save');
    visit('/venue/1/services');
    ok(!find('#venueServices').val(), 'Venue should not have event types!');
  });
});
