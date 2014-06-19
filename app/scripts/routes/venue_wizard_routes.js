(function () {
  'use strict';

  VenuuDashboard.WizardRoute = VD.Route.extend({
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

  // New wizard

  VenuuDashboard.VenueWizardRoute = VD.Route.extend({
    contentTemplate: 'venue/wizard',
    contentController: 'venueEdit',
    sidebarTemplate: 'venue/wizard/sidebar',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
      var group = this.controllerFor('application').get('venueGroupSelection');
      if (group) {
        venue.set('venueGroup', group);
        venue.set('address', group.get('address'));
        venue.set('zipcode', group.get('zipcode'));
        venue.set('city', group.get('city'));
      }
      this.controllerFor('venueEdit').set('model', venue);
    }
  });

  VenuuDashboard.VenueWizardIndexRoute = VD.WizardRoute.extend({
    wizardPage: 'index'
  });

  VenuuDashboard.VenueWizardPricingRoute = VD.WizardRoute.extend({
    wizardPage: 'pricing'
  });

  VenuuDashboard.VenueWizardTypesRoute = VD.WizardRoute.extend({
    wizardPage: 'types'
  });

  VenuuDashboard.VenueWizardServicesRoute = VD.WizardRoute.extend({
    wizardPage: 'services'
  });

  // Edit wizard

  VenuuDashboard.VenueEditRoute = VD.Route.extend({
    contentTemplate: 'venue/wizard',
    sidebarTemplate: 'venue/edit_sidebar'
  });

  VenuuDashboard.VenueEditIndexRoute = VD.WizardRoute.extend({
    wizardPage: 'index',
    sidebarTemplate: 'venue/edit_sidebar'
  });

  VenuuDashboard.VenueEditPricingRoute = VD.WizardRoute.extend({
    wizardPage: 'pricing',
    sidebarTemplate: 'venue/edit_sidebar'
  });

  VenuuDashboard.VenueEditTypesRoute = VD.WizardRoute.extend({
    wizardPage: 'types',
    sidebarTemplate: 'venue/edit_sidebar'
  });

  VenuuDashboard.VenueEditServicesRoute = VD.WizardRoute.extend({
    wizardPage: 'services',
    sidebarTemplate: 'venue/edit_sidebar'
  });

})();
