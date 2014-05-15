VenuuDashboard.IndexRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('venue');
  }
});