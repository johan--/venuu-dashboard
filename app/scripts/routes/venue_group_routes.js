(function () {
  'use strict';

  VenuuDashboard.VenueGroupIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue_group');
    },
  });

  var defaultActions = {
    willTransition: VD.confirmTransition('venueGroupEdit')
  };

  VenuuDashboard.VenueGroupEditRoute = VD.Route.extend({
    sidebarTemplate: 'venue_group/edit_sidebar',
    setupController: function (controller, model) {
      controller.set('model', this.modelFor('venue_group.edit'));
    },
    actions: defaultActions
  });

  VenuuDashboard.VenueGroupNewRoute = VD.Route.extend({
    sidebarTemplate: 'venue_group/info_sidebar',
    contentController: 'venueGroupEdit',
    setupController: function (controller, model) {
      var venueGroup = this.get('store').createRecord('venue_group');
      this.controllerFor('venueGroupEdit').set('model', venueGroup);
    },
    actions: defaultActions
  });

})();
