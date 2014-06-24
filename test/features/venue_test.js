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
    contains(find('h2').text(), 'Tilasi',
      'Venues header should exist');
  });
});

test('First venue name found', function () {
  visit('/venue');
  andThen(function () {
    contains(find('.m-venue-box h6').first().text(), 'Murphy, Douglas and Sawayn 4',
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

  fillFields({
    title: 'Tuomiokirkko',
    pitch: 'Kaunis puukirkko',
    description: 'Ikävä paikka'
  });

  click('#save');
  visit('/venue/1');
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
  visit('/venue/wizard');
  andThen(function () {
    // http://plnkr.co/edit/ODvlUOLYMxe6VPx1Zjlw?p=preview
    find('#venue-group').val(1).change();

    fillFields({
      title: 'Gurula',
      pitch: 'Panini-mies',
      description: 'Mukavat sohvat'
    });

    click('#save');
    visit('/venue/'+(venuesSeeded+1));
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
    doesNotContain(find('.m-venue-box h6').text(), 'Murphy, Douglas and Sawayn 4',
      'Venue Murphy, Douglas and Sawayn 4 should be the first venue');
  });
});

test('VenueTypes can be edited', function () {
  visit('/venue/1/types');
  andThen(function () {
    find('#venueTypes').val([1, 2]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    contains(find('#venueTypes').val(), '1', 'VenueType 1 should be selected!');
    contains(find('#venueTypes').val(), '2', 'VenueType 2 should be selected!');
  });
});

test('VenueTypes can be removed', function () {
  visit('/venue/1/types');
  andThen(function () {
    find('#venueTypes').val([]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    ok(!find('#venueTypes').val(), 'Venue should not have venuetypes!');
  });
});

test('VenueEvents can be edited', function () {
  visit('/venue/1/types');
  andThen(function () {
    find('#eventTypes').val([1, 2]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    contains(find('#eventTypes').val(), '1', 'EventType 1 should be selected!');
    contains(find('#eventTypes').val(), '2', 'EventType 2 should be selected!');
  });
});

test('VenueEvents can be removed', function () {
  visit('/venue/1/types');
  andThen(function () {
    find('#eventTypes').val([]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/types');
    ok(!find('#eventTypes').val(), 'Venue should not have event types!');
  });
});

test('VenueServices can be edited', function () {
  visit('/venue/1/services');
  andThen(function () {
    find('#venueServices').val([6, 15, 36]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/services');
    contains(find('#venueServices').val(), '6', 'Venue should have WiFi selected!');
    contains(find('#venueServices').val(), '15', 'Venue should have Terassi selected!');
    contains(find('#venueServices').val(), '36', 'Venue should have Pelikonsoli selected!');
    ok(find('#venueServices').val().length === 3, 'Venue should have 3 services!');
  });
});

test('VenueServices can be removed', function () {
  visit('/venue/1/services');
  andThen(function () {
    find('#venueServices').val([]).change().trigger('chosen:updated');
  });
  andThen(function () {
    click('#save');
    visit('/venue/1/services');
    ok(!find('#venueServices').val(), 'Venue should not have event types!');
  });
});
