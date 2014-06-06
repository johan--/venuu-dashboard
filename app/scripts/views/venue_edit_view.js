(function () {
  'use strict';

  VenuuDashboard.VenueEditView = Ember.View.extend({
    initFoundation: function () {
      console.log('Init Foundation magellan.');
      window.Foundation.libs.magellan.settings.init = false;
      this.$(document).foundation('magellan');
    }.on('didInsertElement')
  });

})();
