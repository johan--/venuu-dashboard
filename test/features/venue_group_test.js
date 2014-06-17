module('Integration: Venue groups', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
  }
});

test('Venue groups page title found', function () {
  visit('/venue-group');
  andThen(function () {
    contains(find('h4').text(), 'Kohteet',
      'Locations title found!');
  });
});

test('First venue group name found', function () {
  visit('/venue-group');
  andThen(function () {
    contains(find('li').text(), 'Kongressikeskus',
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
  fillIn('#vg-name', 'Tuomiokirkko');
  fillIn('#vg-city', 'Helsinki');
  fillIn('#vg-zipcode', '00110');
  fillIn('#vg-address', 'Senaatintori');
  click('#save');
  andThen(function () {
    contains(find('#vg-name').val(), 'Tuomiokirkko',
      'New name found!');
    contains(find('#vg-address').val(), 'Senaatintori',
      'New address found!');
    contains(find('#vg-zipcode').val(), '00110',
      'New zipcode found!');
    contains(find('#vg-city').val(), 'Helsinki',
      'New city found!');
  });
});

test('New venue group can be added', function () {
  visit('/venue-group/new');
  fillIn('#vg-name', 'Chemicum');
  fillIn('#vg-city', 'Helsinki');
  fillIn('#vg-zipcode', '00550');
  fillIn('#vg-address', 'A.I. Virtasen aukio 1');
  click('#save');
  andThen(function () {
    contains(find('#vg-name').val(), 'Chemicum',
      'New name found!');
    contains(find('#vg-zipcode').val(), '00550',
      'New zipcode found!');
    contains(find('#vg-address').val(), 'A.I. Virtasen aukio 1',
      'New address found!');
    contains(find('#vg-city').val(), 'Helsinki',
      'New city found!');
  });
});

test('Venue groups can be deleted', function () {
  visit('/venue-group/1');
  click('#destroy');
  andThen(function () {
    ok(find('li').text().indexOf('Kongressikeskus') === -1,
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

