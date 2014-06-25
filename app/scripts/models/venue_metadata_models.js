(function () {
  'use strict';

  // A super class for models with a name.
  VenuuDashboard.NamedModel = DS.Model.extend({
    name: DS.attr('string')
  });

  VenuuDashboard.VenueType = VD.NamedModel.extend();
  VenuuDashboard.EventType = VD.NamedModel.extend();
  VenuuDashboard.VenueServiceCategory = VD.NamedModel.extend({
    venueServices: DS.hasMany('venueService', {async: true})
  });
  VenuuDashboard.VenueService = VD.NamedModel.extend({
    category: DS.attr('string')
  });

})();
