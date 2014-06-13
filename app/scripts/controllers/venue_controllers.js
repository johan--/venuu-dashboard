(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend({});

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    init: function () {
      this.set('allVenueTypes', this.get('store').find('venueType'));
      this.set('allVenueServices', this.get('store').find('venueService'));
      this.set('allEventTypes', this.get('store').find('eventType'));
    },
    actions: {
      save: function () {
        var self = this;

        function transitionToEdit(record) {
          self.transitionToRoute('venue.edit', record);
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

        function transitionToVenueIndex() {
          self.transitionToRoute('venue');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueIndex);
      }
    }
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
