(function () {
  'use strict';

  VenuuDashboard.VenueGroupController = Ember.ObjectController.extend({
    actions: {
      destroy: function () {
        var self = this;

        function transitionToRoot() {
          self.transitionToRoute('venue_groups');
        }

        this.get('model').destroyRecord()
          .then(transitionToRoot);
      }
    }
  });

})();