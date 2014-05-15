VenuuDashboard.VenueEditRoute = Ember.Route.extend({
  model: function (params) {
    return this.get('store').find('venue', this.modelFor('venue').id);
  },
  setupController: function (controller, model) {
    controller.set('model', model);
    var buffer = model.get('attributes').map(function (attr) {
      return {
        key: attr.get('key'),
        value: attr.get('value')
      };
    });
    controller.set('buffer', buffer);
  }
});