(function () {
  'use strict';

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transition(record) {
          self.transitionToRoute('venue', record);
        }

        function failure(response) {
          console.error('save failure', response);
        }

        this.get('model').save()
          .then(transition)
          .catch(failure);
      },
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
