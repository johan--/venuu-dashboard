(function () {
  'use strict';

  VenuuDashboard.VenueGroupEditRoute = Ember.Route.extend({
    model: function () {
      return this.modelFor('venue_group');
    }
  });

})();