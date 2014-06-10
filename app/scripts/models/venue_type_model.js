(function () {
  'use strict';

  VenuuDashboard.VenueType = DS.Model.extend({
    name: DS.attr('string')
/*    venues: DS.hasMany('venue', { async: true })*/
  });

})();
