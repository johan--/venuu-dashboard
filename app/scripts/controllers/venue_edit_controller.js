(function () {
  'use strict';

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        this.transitionToRoute('venue', this.get('model'));
      }
    }
  });

})();