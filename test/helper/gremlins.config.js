function insideContainer(element) {
  return $(element).parents('#ember-testing').length && // inside container
    !$(element).is('.m-logo') && // cannot click venuu logo
    !$(element).parents('footer').length;
}

var clicker = gremlins.species.clicker()
  .clickTypes(['click'])
  .canClick(insideContainer);

if (!('_phantom' in window) && !location.search.match(/testNumber/)) {
  QUnit.done(function () {
    gremlins
      .createHorde()
      .gremlin(clicker)
      .unleash();
  });
}