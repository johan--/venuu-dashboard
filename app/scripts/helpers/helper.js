Ember.Handlebars.helper('address', function (venue_group) {
  if (venue_group.get('address') && venue_group.get('zipcode') &&  venue_group.get('city')) {
    return 'Osoite: ' + venue_group.get('address') + ', ' + venue_group.get('zipcode') + ' ' +  venue_group.get('city');
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