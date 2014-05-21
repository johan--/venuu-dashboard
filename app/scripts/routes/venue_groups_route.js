(function () {
  'use strict';

  VenuuDashboard.VenueGroupsRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').find('venue_group');
    }
  });

})();