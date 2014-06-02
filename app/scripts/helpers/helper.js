Ember.Handlebars.helper('address', function (venue_group) {
  if (venue_group.get('address') && venue_group.get('zipcode') &&
      venue_group.get('city')) {
    return 'Osoite: ' + venue_group.get('address') + ', ' +
      venue_group.get('zipcode') + ' ' +  venue_group.get('city');
  } else {
    return 'Osoitetta ei ole täytetty.';
  }
}, 'address', 'zipcode', 'city');

Ember.Handlebars.helper('boolean', function (boolean) {
  if (boolean) {
    return 'Kyllä';
  } else {
    return 'Ei';
  }
});

Ember.Handlebars.registerBoundHelper('pluralize', function (number, options) {
  var phraseMatch = (options.hash.phrase || '{|s}')
    .match(/(.*?)\{(.*?)\|(.*?)\}/);
  Ember.assert('The optional "phrase" hash for {{pluralize}} should be ' +
    'formatted as <phrase to pluralize>{<singular ending>|<plural ending>}',
    phraseMatch);
  var word = phraseMatch[1],
    singular = word + phraseMatch[2],
    plural = word + phraseMatch[3];
  return number === 1 ? singular : plural;
});
