(function () {
  'use strict';

  VenuuDashboard.VenueGroupsNewRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').createRecord('venue_group');
    },
    controllerName: 'venue_group_edit',
    templateName: 'venue_group/new'
  });

})();