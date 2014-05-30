(function () {
  'use strict';

  VenuuDashboard.IndexRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('index_sidebar', {
        outlet: 'sidebar',
        controller: 'venueGroups'
      });
      this.render('index', {
        outlet: 'content',
        controller: 'venueGroups'
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venueGroups').set('model', this.get('store').find('venue_group'));
    }
  });

})();
