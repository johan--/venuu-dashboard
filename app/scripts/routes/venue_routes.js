(function () {
  'use strict';

  VenuuDashboard.VenueRoute = Ember.Route.extend({
    renderTemplate: function () {
      /* No sidebar, because it contains sticky navigation for editing.
      this.render('venue/sidebar', {
        outlet: 'sidebar'
      });*/
      this.render('venue/showAll', {
        outlet: 'content'
      });
    },
    setupController: function (controller, model) {
      //this._super(controller, model);
      this.controllerFor('venue').set('model', this.get('store').find('venue'));
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
      //this._super(controller, model);
      this.controllerFor('venueEdit').set('model', this.modelFor('venue.edit'));
      controller.set('allVenueTypes', this.get('store').find('venueType'));
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
      //this._super(controller, model);
      var venue = this.get('store').createRecord('venue');
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

})();
