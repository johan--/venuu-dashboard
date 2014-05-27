(function () {
  'use strict';

  VenuuDashboard.VenueEditRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue/edit', {
        outlet: 'content'
      });
    },
    setupController: function (controller, model) {
      this.controllerFor('venueEdit').set('model', this.modelFor('venue'));
    }
  });

})();
