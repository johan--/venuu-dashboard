VenuuDashboard.VenuesRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('venue');
  }
});