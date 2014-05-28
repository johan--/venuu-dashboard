(function () {
  'use strict';

  VenuuDashboard.VenueGroupEditRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/edit', {
        outlet: 'content'
      });
    },
    setupController: function (controller, model) {
      this.controllerFor('venueGroupEdit').set('model', this.modelFor('venue_group'));
    }
  });

})();
