(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    },
    renderTemplate: function () {
      /* No sidebar, because it contains sticky navigation for editing.
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });*/
      this.render('venue/index', {
        outlet: 'content',
        into: 'application'
      });
    }
  });

  VenuuDashboard.VenueEditRoute = Ember.Route.extend({
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
      controller.set('model', model);
    }
  });

  VenuuDashboard.VenueNewRoute = Ember.Route.extend({
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
      var venue = this.get('store').createRecord('venue');
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

})();
