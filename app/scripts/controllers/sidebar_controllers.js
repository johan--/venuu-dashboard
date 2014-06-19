(function () {
  'use strict';

  VenuuDashboard.IndexSidebarController = Ember.ArrayController.extend({
    setModels: function () {
      this.set('venues', this.get('store').find('venue'));
      this.set('venueGroups', this.get('store').find('venue_group'));
    }.on('init')
  });

})();
