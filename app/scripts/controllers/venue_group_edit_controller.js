(function () {
  'use strict';

  VenuuDashboard.VenueGroupEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transition(record) {
          console.log(record.id);
          self.transitionToRoute('venue_group', record);
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

        function transitionToVenueGroups() {
          self.transitionToRoute('venue_groups');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueGroups);
      }
    }
  });

})();