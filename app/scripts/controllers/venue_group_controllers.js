(function () {
  'use strict';

  VenuuDashboard.VenueGroupController = Ember.ObjectController.extend({
  });

  VenuuDashboard.VenueGroupNewController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venue_group.new');
      }
    }
  });

  VenuuDashboard.VenueGroupEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transition(record) {
          self.transitionToRoute('venue_group.edit', record);
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

        function transitionToVenueGroup() {
          self.transitionToRoute('venue_group');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueGroup);
      }
    }
  });

})();
