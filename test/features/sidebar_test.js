module('Integration: Sidebar', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.seedBackend();
  },
  teardown: function () { // After each test
    //VenuuDashboard.reset();
  }
});

test('Index sidebar should have username and company', function () {
  visit('/');
  andThen(function () {
    contains(find('p').text(), 'Jussi Doe',
      'Jussi Doe is found!');
    contains(find('p').text(), 'RealDeal Business',
      'RealDeal Business is found!');
  });
});

test('Index sidebar should contain number of venuegroups', function () {
  visit('/');
  andThen(function () {
    contains(find('p').text(), '4',
      '4 venue groups found!');
  });
});

test('Index sidebar should contain number of venues', function () {
  visit('/');
  andThen(function () {
    contains(find('p').text(), '8',
      '8 venues found!');
  });
});

test('Venuegroup sidebar should show Kongressikeskus information', function () {
  visit('/venue-group/1');
  andThen(function () {
    contains(find('.m-venuegroup-sidebar li span').first().text(), 'Kongressikeskus',
      'Kongressikeskus found!');
    contains(find('.m-venuegroup-sidebar li p').first().text(), '2',
      'Kongressikeskus has 2 venues!');
  });
});

test('Venuegroup sidebar should show Keskusta information', function () {
  visit('/venue-group/1');
  andThen(function () {
    contains(find('.m-venuegroup-sidebar li span').text(), 'Keskusta',
      'Keskusta found!');
    contains(find('.m-venuegroup-sidebar li p').text(), '2',
      'Keskusta has 2 venues!');
  });
});

test('Venuegroup sidebar should show Kumpulan kampus information', function () {
  visit('/venue-group/1');
  andThen(function () {
    contains(find('.m-venuegroup-sidebar li span').last().text(), 'Kumpulan kampus',
      'Kumpulan kampus found!');
    contains(find('.m-venuegroup-sidebar li p').last().text(), '4',
      'Kumpulan kampus has 4 venues!');
  });
});

test('New Venuegroup page shows infosidebar', function () {
  visit('/venue-group/new');
  andThen(function () {
    contains(find('.m-box-title').text(), 'Vinkki',
      'Infosidebar with Vinkki title found!');
  });
});
