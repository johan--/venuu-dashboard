VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
  needs: 'venue',
  actions: {
    save: function () {
      this.transitionToRoute('venue', this.get('model'));
    }
  }
});