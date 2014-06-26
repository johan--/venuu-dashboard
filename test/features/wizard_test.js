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

var testBilling = {
  rentPerDay: 500,
  reservationFee: 1000
};

var testSelections = {
  venueTypes: [1, 2],
  eventTypes: [1, 2],
  venueServices: [6, 15, 36]
};

function step(next, actions) {
  click('#' + next);
  andThen(function () {
    actions();
  });
}

/*
  Goes through the wizard and fills it with testVenue, testBilling and testSelections
*/
function fillWizard(action1, action2, action3, action4) {
  visit('/venue/wizard');
  if (action1) {
    action1();
  }

  select('venue-group', 2);
  fillFields(testVenue);

  step('step', function () {
    if (action2) {
      action2();
    }
    fillFields(testBilling);
  });

  step('step', function () {
    if (action3) {
      action3();
    }
    select('venueTypes', testSelections.venueTypes);
    select('eventTypes', testSelections.eventTypes);
  });

  step('step', function () {
    if (action4) {
      action4();
    }
    select('venueServices', testSelections.venueServices);
  });
}

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

test('Wizard has the correct steps', function () {
  fillWizard(
    function () {
      contains(
        find('h4').text(),
        'Perustiedot',
        'Index step should contain Perustiedot -title'
      );
    },
    function () {
      contains(
        find('h4').text(),
        'Hinnoittelu',
        'Billing step should contain Hinnoittelu -title'
      );
    },
    function () {
      contains(
        find('h4').text(),
        'Tapahtumat',
        'Types and events step should contain Tapahtumat -title'
      );
    },
    function () {
      contains(
        find('h4').text(),
        'Palvelut & puitteet',
        'Services step should contain Palvelut & puitteet -title'
      );
    }
  );
});

test('All the steps are working and venue is saved with correct information', function () {
  fillWizard();

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
      containsArray(testSelections.venueTypes, content.venue.venue_type_ids, 'Venue Type Ids');
      containsArray(testSelections.eventTypes, content.venue.event_type_ids, 'Event Type Ids');
      containsArray(testSelections.venueServices, content.venue.venue_service_ids, 'Service Type Ids');
    });
  });
});

test('After filling the wizard, each step should contain the correct information', function () {
  fillWizard();
  andThen(function () {
    checkSelection('venueServices', [
      [6, 'WiFi'],
      [15, 'Terassi'],
      [36, 'Pelikonsoli']
    ]);
  });

  step('back', function () {
    checkSelection('venueTypes', [
      [1, 'Juhlasali'],
      [2, 'Tapahtumatila']
    ]);
    checkSelection('eventTypes', [
      [1, 'Juhlat'],
      [2, 'Häät']
    ]);
  });

  step('back', function () {
    checkFields(testBilling);
  });

  step('back', function () {
    checkFields(testVenue);
  });
});
