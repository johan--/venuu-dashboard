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
      controller.set('model', model); // Hookkaa modelit aina ensin!
      controller.set('allVenueTypes', this.get('store').find('venueType'));
      controller.set('allVenueServices', this.get('store').find('venueService'));
      controller.set('allEventTypes', this.get('store').find('eventType'));
    }
  });

  VenuuDashboard.VenueNewRoute = VD.Route.extend({
    contentController: 'venueEdit',
    sidebarTemplate: 'venue/sidebar',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
      this.controllerFor('venueEdit').set('model', venue);
      controller.set('allVenueTypes', this.get('store').find('venueType'));
      controller.set('allVenueServices', this.get('store').find('venueService'));
    }
  });

  VenuuDashboard.VenueGroupNewVenueRoute = VD.Route.extend({
    model: function (params) {
      return this.get('store').find('venueGroup', params.venue_group_id);
    },
    contentController: 'venueEdit',
    contentTemplate: 'venue/new',
    sidebarTemplate: 'venue/sidebar',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
      venue.set('venueGroup', model);
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

})();
