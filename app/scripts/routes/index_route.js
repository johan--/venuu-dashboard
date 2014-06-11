(function () {
  'use strict';

  VenuuDashboard.IndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue_group');
    }
  });

})();
