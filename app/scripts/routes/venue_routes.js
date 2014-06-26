(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    }
  });

  // Wizard super route
  VenuuDashboard.VenueWizardBaseRoute = VD.Route.extend({
    contentTemplate: 'venue/wizard',
    contentController: 'venueEdit',
    actions: {
      willTransition: VD.confirmTransition('venueEdit', 'wizard')
    }
  });

  // New wizard
  VenuuDashboard.VenueWizardRoute = VD.VenueWizardBaseRoute.extend({
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
      // Make a new venue directly to a group.
      var group = this.controllerFor('application').get('venueGroupSelection');
      if (group) {
        venue.set('venueGroup', group);
        this.controllerFor('application').set('venueGroupSelection', null);
      }
      this.controllerFor('venueEdit').set('model', venue);
    },
  });

  // Edit wizard
  VenuuDashboard.VenueEditRoute = VD.VenueWizardBaseRoute.extend();

  // Wizard page super class
  VenuuDashboard.WizardPageRoute = VD.Route.extend({
    sidebarTemplate: 'venue/wizard/sidebar',
    renderTemplate: function (controller, model) {
      this.render('venue/wizard/' + this.wizardPage, {
        controller: 'venueEdit'
      });
      this.render(this.sidebarTemplate, {
        into: 'application',
        outlet: 'sidebar'
      });
    }
  });

  // Generate wizard pages.
  ['index', 'pricing', 'types', 'services'].forEach(function (page) {
    // New wizard
    VenuuDashboard['VenueWizard' + page.capitalize() + 'Route'] =
      VD.WizardPageRoute.extend({ wizardPage: page });
    // Edit wizard
    VenuuDashboard['VenueEdit' + page.capitalize() + 'Route'] =
      VD.WizardPageRoute.extend({
        wizardPage: page,
        sidebarTemplate: 'venue/edit_sidebar'
      });
  });

})();
