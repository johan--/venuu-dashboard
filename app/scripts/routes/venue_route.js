VenuuDashboard.VenueRoute = Ember.Route.extend({
  model: function (params) {
    return this.get('store').find('venue', params.venue_id);
  }
});