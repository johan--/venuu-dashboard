(function () {
  'use strict';

  VenuuDashboard.VenueGroupRoute = Ember.Route.extend({
    model: function (params) {
      return this.get('store').find('venue_group', params.venue_group_id);
    },
    templateName: 'venue_group/show'
  });

})();