(function () {
  'use strict';

  VenuuDashboard.VenueGroupsNewRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/new', {
        outlet: 'content',
        controller: 'venueGroupEdit'
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      var venueGroup = this.get('store').createRecord('venue_group');
      this.controllerFor('venueGroupEdit').set('model', venueGroup);
    }
  });

})();

