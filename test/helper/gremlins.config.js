function insideContainer(element) {
  return $(element).parents('#ember-testing').length && // inside container
    !$(element).is('.m-logo'); // cannot click venuu logo
}

var clicker = gremlins.species.clicker()
  .clickTypes(['click'])
  .canClick(insideContainer);

if (!('_phantom' in window)) {
  gremlins
    .createHorde()
    .gremlin(clicker)
    .unleash();
}