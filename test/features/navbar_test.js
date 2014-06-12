module('Integration: Venue groups', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
  }
});

//VENUE GROUPS

test('Going to venue groups should work', function () {
  visit('/');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h4').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when creating a venue group should work', function () {
  visit('/venue-group/new');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h4').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when editing a venue group should work', function () {
  visit('/venue-group/1');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h4').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

//VENUES

test('Going to venues should work', function () {
  visit('/');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h4').text(), 'Tilasi',
      'Venues title should exist');
  });
});

test('Going back to venues when creating a venue should work', function () {
  visit('/venue/new');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h4').text(), 'Tilasi',
      'Venues title should exist');
  });
});

test('Going back to venues when editing a venue should work', function () {
  visit('/venue/1');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h4').text(), 'Tilasi',
      'Venues title should exist');
  });
});

//ACTIVATION
/*
test('Going to venues should activate venues', function () {
  visit('/');
  click('#navbar-venues');
  andThen(function () {
    contains(find('#navbar-venues').text(), 'Tilasi',
    'Venues should be activated'
    );
  });
});
*/
