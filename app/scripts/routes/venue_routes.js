(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    }
  });

  VenuuDashboard.VenueEditRoute = VD.Route.extend({
    sidebarTemplate: 'venue/sidebar',
    setupController: function (controller, model) {
      controller.set('model', model);
    }
  });

  VenuuDashboard.VenueNewRoute = VD.Route.extend({
    contentController: 'venueEdit',
    sidebarTemplate: 'venue/sidebar',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

})();
