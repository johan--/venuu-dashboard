(function () {
  'use strict';

  VenuuDashboard.VenueEditRoute = Ember.Route.extend({
    model: function (params) {
      return this.modelFor('venue');
    }
  });

})();