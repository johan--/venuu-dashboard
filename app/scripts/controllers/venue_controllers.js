(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend({
  });

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    actions: {
      goto: function (anchor) {
        var $target = $('[data-magellan-destination="' + anchor + '"]');
        $(document.body).scrollTop($target.offset().top);
      },
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
          self.transitionToRoute('venue.index');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueIndex);
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
