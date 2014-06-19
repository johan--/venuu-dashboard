(function () {
  'use strict';

  VenuuDashboard.VenueGroupIndexController = Ember.ArrayController.extend();

  VenuuDashboard.VenueGroupEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transitionToEdit(record) {
          self.transitionToRoute('venue_group.edit', record);
        }

        function failure(response) {
          console.error('save failure', response);
        }

        this.get('model').save()
          .then(transitionToEdit)
          .catch(failure);
      },
      destroy: function () {
        var self = this;

        function transitionToVenueGroupIndex() {
          self.transitionToRoute('venue_group.index');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueGroupIndex);
      }
    }
  });

})();
