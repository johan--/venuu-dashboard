module('Integration: Venue groups', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
  },
  teardown: function () { // After each test
  }
});

test("Location page title found", function () {
  visit('/venue-group');
  andThen(function () {
    ok(find('h4').text().indexOf('Kohteet') > -1, 'Locations title found!');
  });
});

test("First location name found", function () {
  visit('/venue-group');
  andThen(function () {
    ok(find('li').text().indexOf('Kongressikeskus') > -1, 'Kongressikeskus found!');
  });
});


test("First location details found", function () {
  visit('/venue-group/1');
  andThen(function () {
    ok(find("#address").val().indexOf('Betonimiehenkatu 1') > -1, 'Address found!');
  });
});

test("First location details can be edited", function () {
  visit('/venue-group/1');
  fillIn('#name', 'Tuomiokirkko');
  fillIn('#city', 'Helsinki');
  fillIn('#zipcode', '00110');
  fillIn('#address', 'Senaatintori');
  click('#save');
  andThen(function () {
    ok(find("#name").val().indexOf('Tuomiokirkko') > -1, 'New name found!');
    ok(find("#address").val().indexOf('Senaatintori') > -1, 'New address found!');
    ok(find("#zipcode").val().indexOf('00110') > -1, 'New zipcode found!');
    ok(find("#city").val().indexOf('Helsinki') > -1, 'New city found!');
  });
});

test("New location can be added", function () {
  visit('/venue-group/new');
  fillIn('#name', 'Chemicum');
  fillIn('#city', 'Helsinki');
  fillIn('#zipcode', '00550');
  fillIn('#address', 'A.I. Virtasen aukio 1');
  click('#save');
  andThen(function () {
    ok(find("#name").val().indexOf('Chemicum') > -1, 'New name found!');
    ok(find("#zipcode").val().indexOf('00550') > -1, 'New zipcode found!');
    ok(find("#address").val().indexOf('A.I. Virtasen aukio 1') > -1, 'New address found!');
    ok(find("#city").val().indexOf('Helsinki') > -1, 'New city found!');
  });
});

/*test("Location can be deleted", function () {
  visit('/venue-group/1');
  click("#destroy");
  andThen(function () {
    ok(find('.venue-group-venues').text().indexOf('Kongressikeskus') === -1, 'Kongressikeskus deleted!');
  });
});*/

