module('Integration: Wizard (new venue)', {
  setup: function () { // Before each test
    window.seedBackend();
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

var testVenue = {
  title: 'Tuomiokirkko',
  pitch: 'Kaunis puukirkko',
  description: 'Ikävä paikka'
};

var billing = {
  rentPerDay: 500,
  reservationFee: 1000
};

test('New venue is saved after first step', function () {
  visit('/venue/wizard');
  select('venue-group', 1);
  fillFields(testVenue);
  click('#step');
  visit('/venue/' + (venuesSeeded + 1));
  checkFields(testVenue);
});

test('New venue should not be saved if title is too short', function () {
  visit('/venue/wizard');
  click('#step');
  andThen(function () {
    contains(
      find('.alert-box').text(),
      'Something went wrong',
      'Something went wrong alert should be shown'
    );
  });
  andThen(function () {
    $.get('/api/venues', function (content) {
      ok(content.venues.length === venuesSeeded, 'Invalid venue should not be saved');
    });
  });
});

function step(next, actions) {
  click('#' + next);
  andThen(function () {
    actions();
  });
}

test('All the steps are working and venue is saved with correct information', function () {
  visit('/venue/wizard');
  contains(
    find('h4').text(),
    'Perustiedot',
    'Index step should contain Perustiedot -title'
  );
  select('venue-group', 2);
  fillFields(testVenue);
  step('step', function () {
    fillFields(billing);
    contains(
      find('h4').text(),
      'Hinnoittelu',
      'Billing step should contain Hinnoittelu -title'
    );
  });
  step('step', function () {
    select('venueTypes', [1, 2]);
    select('eventTypes', [1, 2]);
    contains(
      find('h4').text(),
      'Tapahtumat',
      'Types and events step should contain Tapahtumat -title'
    );
  });
  step('step', function () {
    select('venueServices', [6, 15, 36]);
    contains(
      find('h4').text(),
      'Palvelut & puitteet',
      'Services step should contain Palvelut & puitteet -title'
    );
  });
  step('step', function () {
    contains(
      find('h6').text(),
      'Test',
      'Venue with a title of Test should be found'
    );
  });
  andThen(function () {
    $.get('/api/venues/9', function (content) {
      equal(content.venue.title, 'Tuomiokirkko', 'Title should be Tuomiokirkko');
      equal(content.venue.rent_per_day, '500', 'Rent-per-day should be 500');
      equal(content.venue.reservation_fee, '1000', 'reservationFee should be 1000');
      containsArray([1, 2], content.venue.venue_type_ids, 'Venue Type Ids');
      containsArray([1, 2], content.venue.event_type_ids, 'Event Type Ids');
      containsArray([6, 15, 36], content.venue.venue_service_ids, 'Service Type Ids');
    });
  });
});


// TODO
// Testi jossa täytetään stepit ja vikassa stepissa palataan alkuun tarkistaen tiedot
// Wizard edit testi
test('', function () {
  expect(0);
});
