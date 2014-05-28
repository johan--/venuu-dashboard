(function () {
  'use strict';

  VenuuDashboard.VenueGroupsController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venue_groups.new');
      }
    }
  });
})();
