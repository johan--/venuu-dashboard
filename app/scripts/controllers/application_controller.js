(function () {
  'use strict';

  VenuuDashboard.ApplicationController = Ember.ArrayController.extend({
    actions: {
      hideNavbar: function () {
        $('.top-bar').removeClass('expanded');
      }
    }
  });

})();
