module('Integration: Navbar', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    //window.seedBackend();
  },
  teardown: function () { // After each test
  }
});


/* Uncomment this if needed.
test('dummy seed', function () {
  expect(0);
  window.seedBackend();
});
*/

//VENUE GROUPS

test('Going to venue groups should work', function () {
  visit('/');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h2').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when creating a venue group should work', function () {
  visit('/venue-group/new');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h2').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

test('Going back to venue groups when editing a venue group should work', function () {
  visit('/venue-group/1');
  click('#navbar-venue-groups');
  andThen(function () {
    contains(find('h2').text(), 'Kohteet',
      'Venue Groups title should exist');
  });
});

//VENUES

test('Going to venues should work', function () {
  visit('/');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h2').text(), 'Tilasi',
      'Venues title should exist');
  });
});

test('Going back to venues when creating a venue should work', function () {
  visit('/venue/new');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h2').text(), 'Tilasi',
      'Venues title should exist');
  });
});

test('Going back to venues when editing a venue should work', function () {
  visit('/venue/1');
  click('#navbar-venues');
  andThen(function () {
    contains(find('h2').text(), 'Tilasi',
      'Venues title should exist');
  });
});

//ACTIVATION

function checkNavAct(which, message) {
  var items = ['index', 'venues', 'venue-groups'];

  andThen(function () {
    items.forEach(function (item) {
      if (which === item) {
        ok(find('#navbar-' + item).is('.active'), item.capitalize() + ' should be active.' +
          (message ? ' extra message: ' + message : ''));
      } else {
        ok(!find('#navbar-' + item).is('.active'), item.capitalize() + ' should be inactive.' +
          (message ? ' extra message: ' + message : ''));
      }
    });
  });
}

function fromEveryWhere(test) {
  //navigate to different places to test corner cases
  var paths = ['/', '/venue-group/new', '/venue-group/', '/venue-group/1',
    '/venue/wizard', '/venue-group/1', '/venue/1'
  ];
  paths.forEach(function (path) {
    visit(path);
    test.bind(null, 'coming from: ' + path)();
  });
}

test('Going to venues should activate venues', function () {
  visit('/');
  click('#navbar-venues');
  checkNavAct('venues');
  fromEveryWhere(function (message) {
    click('#navbar-venues');
    checkNavAct('venues', message + ' to venues');
  });
});

test('Going to venues should activate venues', function () {
  fromEveryWhere(function (message) {
    click('#navbar-venue-groups');
    checkNavAct('venue-groups', message + ' to venue groups');
  });
});

test('Going to index should activate index', function () {
  fromEveryWhere(function (message) {
    click('#navbar-index');
    checkNavAct('index', message);
  });
});

test('Going to /venue-group/new should activate venue groups', function () {
  fromEveryWhere(function (message) {
    visit('/venue-group/new');
    checkNavAct('venue-groups', message);
  });
});

test('Navigating to add venues should activate venues', function () {
  fromEveryWhere(function (message) {
    click('#navbar-venues');
    andThen(function () {
      click('#create');
      andThen(function () {
        checkNavAct('venues', message);
      });
    });
  });
});

test('Navigating to add venue through venue group should activate venues', function () {
  fromEveryWhere(function (message) {
    visit('/venue-group/1/');
    click('#addVenue');
    checkNavAct('venues', message);
  });
});

test('Navigating to add venue group through index should activate venue groups', function () {
  fromEveryWhere(function (message) {
    visit('/');
    click('#create');
    checkNavAct('venue-groups', message);
  });
  //test going to index through navbar too
  fromEveryWhere(function (message) {
    click('#navbar-index');
    andThen(function () {
      click('#create');
      checkNavAct('venue-groups', message);
    });
  });
});
