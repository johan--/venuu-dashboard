(function () {
  'use strict';

  VenuuDashboard.VenueGroupsRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/showAll', {
        outlet: 'content',
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venueGroups').set('model', this.get('store').find('venue_group'));
    }
  });
})();
