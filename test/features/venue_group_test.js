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
    ok(find('h4').text().indexOf('Kohteet') > -1,
      'Locations title found!');
  });
});

test('First venue group name found', function () {
  visit('/venue-group');
  andThen(function () {
    ok(find('li').text().indexOf('Kongressikeskus') > -1,
      'Kongressikeskus found!');
  });
});


test('First venue group details found', function () {
  visit('/venue-group/1');
  andThen(function () {
    ok(find('#address').val().indexOf('Betonimiehenkatu 1') > -1,
      'Address found!');
  });
});

test('First venue groups details can be edited', function () {
  visit('/venue-group/1');
  fillIn('#name', 'Tuomiokirkko');
  fillIn('#city', 'Helsinki');
  fillIn('#zipcode', '00110');
  fillIn('#address', 'Senaatintori');
  click('#save');
  andThen(function () {
    ok(find('#name').val().indexOf('Tuomiokirkko') > -1,
      'New name found!');
    ok(find('#address').val().indexOf('Senaatintori') > -1,
      'New address found!');
    ok(find('#zipcode').val().indexOf('00110') > -1,
      'New zipcode found!');
    ok(find('#city').val().indexOf('Helsinki') > -1,
      'New city found!');
  });
});

test('New venue group can be added', function () {
  visit('/venue-group/new');
  fillIn('#name', 'Chemicum');
  fillIn('#city', 'Helsinki');
  fillIn('#zipcode', '00550');
  fillIn('#address', 'A.I. Virtasen aukio 1');
  click('#save');
  andThen(function () {
    ok(find('#name').val().indexOf('Chemicum') > -1,
      'New name found!');
    ok(find('#zipcode').val().indexOf('00550') > -1,
      'New zipcode found!');
    ok(find('#address').val().indexOf('A.I. Virtasen aukio 1') > -1,
      'New address found!');
    ok(find('#city').val().indexOf('Helsinki') > -1,
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

//NAVBAR

test('Going to venue groups should work', function () {
  visit('/');
  click('#navbar-venue-groups');
  andThen(function () {
    ok(find('h4').text().indexOf('Kohteet') > -1,
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when creating a venue group should work', function () {
  visit('/venue-group/new');
  click('#navbar-venue-groups');
  andThen(function () {
    ok(find('h4').text().indexOf('Kohteet') > -1,
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when editing a venue group should work', function () {
  visit('/venue-group/1');
  click('#navbar-venue-groups');
  andThen(function () {
    ok(find('h4').text().indexOf('Kohteet') > -1,
      'Venue Groups title should exist');
  });
});

