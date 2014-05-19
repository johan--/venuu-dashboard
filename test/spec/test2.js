test("Gurula information found", function () {
  visit("/venue/0");
  andThen(function () {
    ok(find("h3").text().indexOf('Gurula') > -1, 'Gurula found!');
  });
});

/*test("Gurula id information found", function () {
  visit("/venue/0");
  andThen(function () {
    ok(find("td").text().indexOf('0') > -1, '0 id found found!');
  });
});*/