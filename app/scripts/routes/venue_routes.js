(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    }
  });

  // New wizard
  VenuuDashboard.VenueWizardRoute = VD.Route.extend({
    contentController: 'venueEdit',
    setupController: function (controller, model) {
      var venue = this.get('store').createRecord('venue'),
        editCtrl = this.controllerFor('venueEdit'),
        appCtrl = this.controllerFor('application');
      // Make a new venue directly to a group.
      var group = appCtrl.get('venueGroupSelection');
      if (group) {
        venue.set('venueGroup', group);
        appCtrl.set('venueGroupSelection', null);
      }
      editCtrl.set('model', venue);
      editCtrl.set('completedSteps', []);
      editCtrl.set('currentStep', 'index');
    },
    actions: {
      willTransition: VD.confirmTransition('venueEdit', 'wizard')
    }
  });

  // Edit wizard
  VenuuDashboard.VenueEditRoute = VD.Route.extend({
    actions: {
      willTransition: VD.confirmTransition('venueEdit', 'edit')
    }
  });

  // Wizard page super class
  VenuuDashboard.WizardPageRoute = VD.Route.extend({
    sidebarTemplate: 'venue/wizard/sidebar',
    renderTemplate: function (controller, model) {
      this.render('venue/wizard/' + this.wizardPage, {
        controller: 'venueEdit',
        into: this.contentTemplate
      });
      this.render(this.sidebarTemplate, {
        into: 'application',
        outlet: 'sidebar',
        controller: 'venueEdit'
      });
    }
  });

  // Generate wizard pages.
  ['index', 'pricing', 'types', 'services'].forEach(function (page) {
    // New wizard
    VenuuDashboard['VenueWizard' + page.capitalize() + 'Route'] =
      VD.WizardPageRoute.extend({
        wizardPage: page,
        contentTemplate: 'venue/wizard'
      });
    // Edit wizard
    VenuuDashboard['VenueEdit' + page.capitalize() + 'Route'] =
      VD.WizardPageRoute.extend({
        wizardPage: page,
        sidebarTemplate: 'venue/edit_sidebar'
      });
  });

})();
