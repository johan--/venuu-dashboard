(function () {
  'use strict';

  VenuuDashboard.VenueEditRoute = Ember.Route.extend({
    model: function () {
      return this.modelFor('venue');
    }
  });

})();