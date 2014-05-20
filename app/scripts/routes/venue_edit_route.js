(function () {
  'use strict';

  VenuuDashboard.VenueEditRoute = Ember.Route.extend({
    model: function (params) {
      return this.get('store').find('venue', this.modelFor('venue').id);
    }
  });

})();