(function () {
  'use strict';

  VenuuDashboard.VenueGroupIndexRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').find('venue_group');
    },
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/index', {
        outlet: 'content',
      });
    }
  });

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
      controller.set('model', this.modelFor('venue_group.edit'));
    }
  });

  VenuuDashboard.VenueGroupNewRoute = Ember.Route.extend({
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
      var venueGroup = this.get('store').createRecord('venue_group');
      this.controllerFor('venueGroupEdit').set('model', venueGroup);
    }
  });

})();
