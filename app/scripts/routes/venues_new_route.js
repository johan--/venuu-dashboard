(function () {
  'use strict';

  VenuuDashboard.VenuesNewRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue/new', {
        outlet: 'content',
        controller: 'venueEdit'
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      var venue = this.get('store').createRecord('venue');
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

})();
