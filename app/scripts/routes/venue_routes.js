(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    }
  });

  var defaultActions = {
    willTransition: VD.confirmTransition('venueEdit')
  };

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
    },
    actions: defaultActions
  });

})();
