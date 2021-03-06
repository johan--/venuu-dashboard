(function () {
  'use strict';

  VenuuDashboard.VenueGroup = DS.Model.extend({
    address: DS.attr('string'),
    city: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    name: DS.attr('string'),
    /*    user_group_ids: DS.hasMany('user_group'), */
    venues: DS.hasMany('venue', { async: true }),
    zipcode: DS.attr('string'),
    imageSrc: function () {
      return 'http://lorempixel.com/output/city-q-c-60-60-' +
        this.get('id') + '.jpg';
    }.property('id')
  });

})();
