(function () {
  'use strict';

  VenuuDashboard.VenueController = Ember.ObjectController.extend({
    actions: {
      create: function () {
        this.transitionToRoute('venue.new');
      }
    }
  });

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    itemController: ['venueType'],
    actions: {
      goto: function (anchor) {
        var $target = $('[data-magellan-destination="' + anchor + '"]');
        $(document.body).scrollTop($target.offset().top);
      },
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

  VenuuDashboard.VenueTypeController = Ember.ObjectController.extend({
    needs: 'venueEdit',
    isChecked: function (key, value) {
      var model = this.get('model');
      var venue = this.get('controllers.venueEdit.model');
      return !!venue.get('venueTypes').findBy('id', model.get('id'));
    }.property()

  });

})();
