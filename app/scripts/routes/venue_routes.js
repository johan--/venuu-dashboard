(function () {
  'use strict';

  VenuuDashboard.VenueIndexRoute = VD.Route.extend({
    model: function () {
      return this.get('store').find('venue');
    }
  });

  var defaultActions = {
    willTransition: VD.confirmTransition('venueEdit')
  };

})();
