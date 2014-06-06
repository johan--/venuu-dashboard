(function () {
  'use strict';

  VenuuDashboard.IndexRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('index_sidebar', {
        outlet: 'sidebar',
        controller: 'venueGroup'
      });
      this.render('index', {
        outlet: 'content',
        controller: 'venueGroup'
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venueGroup').set('model', this.get('store').find('venue_group'));
    }
  });

})();
