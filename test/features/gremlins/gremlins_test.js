module('Integration: Gremlins', {
  setup: function () { // Before each test
    VenuuDashboard.reset();
    visit('/');

    // PhantomJS bind fix
    if (!('bind' in Function.prototype)) {
      Function.prototype.bind = function () {
        var funcObj = this;
        var extraArgs = Array.prototype.slice.call(arguments);
        var thisObj = extraArgs.shift();
        return function () {
          return funcObj.apply(thisObj, extraArgs.concat(Array.prototype.slice.call(arguments)));
        };
      };
    }
  },
  teardown: function () { // After each test
  }
});

function insideContainer(element) {
  return $(element).parents('#ember-testing').length && // inside container
    !$(element).is('.m-logo') && // cannot click venuu logo
    !$(element).parents('footer').length; // dont click footer
}

asyncTest("gremlins unleashed", function () {
  var clicker = gremlins.species.clicker()
    .clickTypes(['click'])
    .canClick(insideContainer);

  var formFiller = gremlins.species.formFiller()
    .canFillElement(insideContainer);

  gremlins
    .createHorde()
    .gremlin(clicker)
    .gremlin(formFiller)
    .after(function () {
      ok(true, 'Gremlins ended');
      start();
    })
    .mogwai(gremlins.mogwais.gizmo().maxErrors(0))
    .unleash();
});