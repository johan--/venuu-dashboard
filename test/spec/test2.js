test("Gurula information found", function () {
  // async helper telling the application to go to the '/' route
  visit("/venue/0");


  // helper waiting the application is idle before running the callback
  andThen(function () {
    ok(find("td").text().indexOf('Gurula') > -1, 'Gurula found!');
  });
});