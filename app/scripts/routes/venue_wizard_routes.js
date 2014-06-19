(function () {
  'use strict';

  VenuuDashboard.WizardRoute = VD.Route.extend({
    renderTemplate: function (controller, model) {
      this.render('venue/wizard/' + this.wizardPage, {
        controller: 'venueEdit'
      });
      this.render('venue/wizard/sidebar', {
        into: 'application',
        outlet: 'sidebar'
      });
    }
  });

  VenuuDashboard.VenueWizardRoute = VD.Route.extend({
    contentTemplate: 'venue/wizard',
    sidebarTemplate: 'venue/wizard/sidebar',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue');
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

})();
