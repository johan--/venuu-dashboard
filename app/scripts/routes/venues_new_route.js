(function () {
  'use strict';

  VenuuDashboard.VenuesNewRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').createRecord('venue');
    },
    controllerName: 'venue_edit',
    templateName: 'venue/new'
  });

})();