(function () {
  'use strict';

  VenuuDashboard.VenueRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue/edit', {
        outlet: 'content',
        controller: 'venueEdit'
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venueEdit').set('model', this.modelFor('venue'));
    }
  });

})();
