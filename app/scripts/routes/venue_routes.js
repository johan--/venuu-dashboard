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
