VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
  needs: 'venue',
  actions: {
    save: function () {
      var self = this;
      this.get('buffer').forEach(function (attr) {
        self.get('controllers.venue.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('venue', this.get('model'));
    }
  }
});