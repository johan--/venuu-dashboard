(function () {
  'use strict';

  //GROUP

  VenuuDashboard.VenueGroupRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/edit', {
        outlet: 'content',
        controller: 'venueGroupEdit'
      });
    },
    setupController: function (controller, model) {
      this.controllerFor('venueGroupEdit').set('model', this.modelFor('venue_group'));
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
      this.controllerFor('venueGroupEdit').set('model', this.modelFor('venue_group.edit'));
    }
  });

  VenuuDashboard.VenueGroupRoute = Ember.Route.extend({
    renderTemplate: function () {
      this.render('venue_group/sidebar', {
        outlet: 'sidebar'
      });
      this.render('venue_group/showAll', {
        outlet: 'content',
      });
    },
    setupController: function (controller, model) {
      this._super(controller, model);
      this.controllerFor('venueGroup').set('model', this.get('store').find('venue_group'));
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
      this._super(controller, model);
      var venueGroup = this.get('store').createRecord('venue_group');
      this.controllerFor('venueGroupEdit').set('model', venueGroup);
    }
  });

})();
