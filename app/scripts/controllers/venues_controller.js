(function () {
  'use strict';

  VenuuDashboard.VenuesController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venues.new');
      }
    }
  });

})();