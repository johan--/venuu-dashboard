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
          venue = this.get('model'),
          venueGroup = venue.get('venueGroup');

        function transitionToEdit(record) {
          self.transitionToRoute('venue.index');
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
    },
    venueGroupChange: function () {
      var model = this.get('model'),
        venueGroup = model.get('venueGroup');

      if (venueGroup) {
        model.set('address', venueGroup.get('address'));
        model.set('zipcode', venueGroup.get('zipcode'));
        model.set('city', venueGroup.get('city'));
      }

    }.observes('venueGroup')
  });

  VenuuDashboard.VenueTypeController = Ember.ObjectController.extend({
    needs: 'venueEdit',
    venueTypes: Ember.computed.alias('controllers.venueEdit.model.venueTypes'),
    isChecked: function () {
      var model = this.get('model');
      return !!this.get('venueTypes').findBy('id', model.get('id'));
    }.property()
  });

  VenuuDashboard.VenueServiceController = Ember.ObjectController.extend({
    needs: 'venueEdit',
    venueServices: Ember.computed.alias('controllers.venueEdit.model.venueServices'),
    isChecked: function () {
      var model = this.get('model');
      return !!this.get('venueServices').findBy('id', model.get('id'));
    }.property()

  });

  VenuuDashboard.EventTypeController = Ember.ObjectController.extend({
    needs: 'venueEdit',
    isChecked: function (key, value) {
      var model = this.get('model');
      var venue = this.get('controllers.venueEdit.model');
      return !!venue.get('eventTypes').findBy('id', model.get('id'));
    }.property()

  });

})();
