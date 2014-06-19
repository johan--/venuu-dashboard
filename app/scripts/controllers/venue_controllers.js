(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend({});

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    init: function () {
      this._super();
      this.set('allVenueTypes', this.get('store').find('venueType'));
      this.set('allVenueServices', this.get('store').find('venueService'));
      this.set('allEventTypes', this.get('store').find('eventType'));
      this.set('allVenueGroups', this.get('store').find('venueGroup'));
    },
    actions: {
      save: function () {
        var self = this,
          venue = this.get('model'),
          venueGroup = venue.get('venueGroup');

        function transitionToEdit(record) {
          self.transitionToRoute('venue.edit', record);
        }

        function failure(response) {
          console.error('save failure', response);
        }

        function saveVenue() {
          venue.save()
            .then(transitionToEdit)
            .catch(failure);
        }

        if (venueGroup && venueGroup.get('isDirty')) {
          venueGroup.save()
            .then(saveVenue);
        } else {
          saveVenue();
        }
      },
      destroy: function () {
        var self = this;

        function transitionToVenueIndex() {
          self.transitionToRoute('venue');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueIndex);
      },
      createVenueGroup: function () {
        this.get('model').set('venueGroup',
          this.get('store').createRecord('venueGroup'));
      },
      cancelNewVenueGroup: function () {
        this.get('model').get('venueGroup').rollback();
      }
    }
  });

})();
