test('basic test', function () {
  expect(1);
  ok(true, 'this had better work.');
});


test("/", function () {
  // async helper telling the application to go to the '/' route
  visit("/");


  // helper waiting the application is idle before running the callback
  andThen(function () {
    equal(find("h4").text(), "Tilasi", "Application header is rendered");
  });
});