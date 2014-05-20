(function () {
  'use strict';

  VenuuDashboard.Venue = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string')
  });

})();