(function () {
  'use strict';

  //GROUP

  VenuuDashboard.VenueGroupController = Ember.ObjectController.extend({
  });

  //GROUPS

  VenuuDashboard.VenueGroupsController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venue_groups.new');
      }
    }
  });

  VenuuDashboard.VenueGroupsEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transition(record) {
          self.transitionToRoute('venue_groups.edit', record);
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

    VenuuDashboard.VenueGroupEditController = Ember.ObjectController.extend({
    actions: {
      save: function () {
        var self = this;

        function transition(record) {
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
