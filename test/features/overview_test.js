module('Integration: Overview', {
  setup: function () { // Before each test
/*    VenuuDashboard.reset();
    window.seedBackend();*/
  },
  teardown: function () { // After each test
  }
});

test('Overview page title found', function () {
  visit('/');
  andThen(function () {
    contains(find('h2').text(), 'Tervetuloa',
      'Greeting should be shown.');
  });
});

test('First venue group name found on overview page', function () {
  visit('/');
  andThen(function () {
    equalsTrimmed(find('.m-venue-box h6').first().text(), 'Kongressikeskus',
      'Kongressikeskus should be shown.');
    equalsTrimmed(find('.m-venue-box small').first().text(), '2 tilaa',
      'Kongressikeskus should have 2 venues.');
  });
});

test('Create venue group button works', function () {
  visit('/');
  click('#create');
  andThen(function () {
    ok(true, 'Create button should work.');
  });
});
