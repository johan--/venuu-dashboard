(function () {
  'use strict';

  VenuuDashboard.VenueController = Ember.ObjectController.extend({
  });

  VenuuDashboard.VenueController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venue.new');
      }
    }
  });

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

        function transitionToVenue() {
          self.transitionToRoute('venue');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenue);
      }
    }
  });

})();
