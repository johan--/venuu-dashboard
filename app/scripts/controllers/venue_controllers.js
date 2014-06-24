(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend({});

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    needs: ['application'],
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
          alert = this.get('alert'),
          venue = this.get('model'),
          venueGroup = venue.get('venueGroup');

        function transitionToEdit(record) {
          self.transitionToRoute('venue.index');
        }

        function failure(response) {
          console.error('save failure', response);
          alert.error('This is an error alert!');
        }

        function saveVenue() {
          venue.save()
            .then(transitionToEdit)
            .then(alert.clear.bind(alert))
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
    },
    venueGroupChange: function () {
      var model = this.get('model'),
        venueGroup = model.get('venueGroup');

      console.log('groupChanged', venueGroup);

      if (venueGroup) {
        setIfEmpty(model, 'address', venueGroup.get('address'));
        setIfEmpty(model, 'zipcode', venueGroup.get('zipcode'));
        setIfEmpty(model, 'city', venueGroup.get('city'));
      }

    }.observes('venueGroup')
  });

  function setIfEmpty(model, attr, val) {
    if (Ember.empty(model.get(attr))) {
      model.set(attr, val);
    }
  }

})();
