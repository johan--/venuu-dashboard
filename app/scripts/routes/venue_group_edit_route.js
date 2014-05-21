(function () {
  'use strict';

  VenuuDashboard.VenueGroupEditRoute = Ember.Route.extend({
    model: function (params) {
      return this.get('store').find('venue_group', this.modelFor('venue_group').id);
    }
  });

})();