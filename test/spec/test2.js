test("Venue information found", function () {
  visit("/venue/1");
  andThen(function () {
    ok(find("h3").text().indexOf('Murphy, Douglas and Sawayn 4') > -1, 'title found!');
  });
});

/*test("Gurula id information found", function () {
  visit("/venue/0");
  andThen(function () {
    ok(find("td").text().indexOf('0') > -1, '0 id found found!');
  });
});*/