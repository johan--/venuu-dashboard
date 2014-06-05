module('Spec: Rails backend test', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    window.fakeLog = [];
  },
  teardown: function () { // After each test
    VenuuDashboard.reset();
  }
});

test('get venue_groups json', function () {
  expect(1);
  /*  setTimeout(function () {*/
  $.ajax({
    dataType: 'json',
    url: '/api/venue_groups',
    async: false,
    success: function () {
      ok(true);
      /*        start();*/
    }
  });
  /*  }, 5000);*/
});
