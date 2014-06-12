(function () {
  'use strict';

  VenuuDashboard.VenueServiceCategory = DS.Model.extend({
    name: DS.attr('string'),
    venueServices: DS.hasMany('venueService', {async: true})
  });

})();
