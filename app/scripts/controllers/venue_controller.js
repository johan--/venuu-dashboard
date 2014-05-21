(function () {
  'use strict';

  VenuuDashboard.VenueController = Ember.ObjectController.extend({
    actions: {
      destroy: function () {
        var self = this;

        function transitionToVenues() {
          self.transitionToRoute('venues');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenues);
      }
    }
  });

})();