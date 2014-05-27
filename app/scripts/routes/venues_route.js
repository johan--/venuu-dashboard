(function () {
  'use strict';

  VenuuDashboard.VenuesRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue/showAll', {
        outlet: 'content',
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venues').set('model', this.get('store').find('venue'));
    }
  });

})();
