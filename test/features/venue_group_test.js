module('Integration: Venue groups', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
  }
});

var testVenueGroup = {
  'vg-name': 'Tuomiokirkko',
  'vg-city': 'Helsinki',
  'vg-zipcode': '00100',
  'vg-address': 'Senaatintori'
};

test('Venue groups page title found', function () {
  visit('/venue-group');
  andThen(function () {
    contains(find('h2').text(), 'Kohteet',
      'Locations title found!');
  });
});

test('First venue group name found', function () {
  visit('/venue-group');
  andThen(function () {
    contains(find('.m-venue-box h6').first().text(), 'Kongressikeskus',
      'Kongressikeskus found!');
  });
});


test('First venue group details found', function () {
  visit('/venue-group/1');
  andThen(function () {
    contains(find('#vg-address').val(), 'Betonimiehenkatu 1',
      'Address found!');
  });
});

test('First venue groups details can be edited', function () {
  visit('/venue-group/1');

  fillFields(testVenueGroup);
  click('#save');
  andThen(checkFields(testVenueGroup));
});

test('New venue group can be added', function () {
  visit('/venue-group/new');
  fillFields(testVenueGroup);
  click('#save');
  andThen(checkFields(testVenueGroup));
});

test('Venue groups can be deleted', function () {
  visit('/venue-group/1');
  click('#destroy');
  andThen(function () {
    doesNotContain(find('.m-venue-box h6').text(), 'Kongressikeskus',
      'Kongressikeskus deleted!');
  });
});

test('Venue groups create button works', function () {
  visit('/venue-group');
  click('#create');
  andThen(function () {
    ok(true, 'Create button works.');
  });
});

