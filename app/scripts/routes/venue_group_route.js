(function () {
  'use strict';

  VenuuDashboard.VenueGroupRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/edit', {
        outlet: 'content',
        controller: 'venueGroupEdit'
      });
    },
    setupController: function (controller, model) {
      this.controllerFor('venueGroupEdit').set('model', this.modelFor('venue_group'));
    }
  });

})();
