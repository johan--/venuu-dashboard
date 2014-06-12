(function () {
  'use strict';

  VenuuDashboard.VenueService = DS.Model.extend({
    name: DS.attr('string'),
    negation: DS.attr('string')
  });

})();
