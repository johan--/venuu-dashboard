module('Integration: Gremlins', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    visit('/');
  },
  teardown: function () { // After each test
    window.seedBackend();
  }
});

function insideContainer(element) {
  return $(element).parents('#ember-testing').length && // inside container
    !$(element).is('.m-logo') && // cannot click venuu logo
    !$(element).parents('footer').length && // dont click footer
    !$(element).is('[href^="#"]');

}

asyncTest('gremlins unleashed', function () {
  var clicker = gremlins.species.clicker()
    .clickTypes(['click'])
    .canClick(insideContainer);

  var formFiller = gremlins.species.formFiller()
    .canFillElement(insideContainer);

  gremlins
    .createHorde()
    .gremlin(clicker)
    .gremlin(formFiller)
    .before(function () {
      console.log('Gremlins unleashed!');
    })
    .after(function () {
      ok(true, 'Gremlins died!');
      start();
    })
    .mogwai(gremlins.mogwais.gizmo().maxErrors(0))
    .unleash();
});
