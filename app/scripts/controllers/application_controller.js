(function () {
  'use strict';

  VenuuDashboard.ApplicationController = Ember.Controller.extend({
    actions: {
      hideNavbar: function () {
        $('.top-bar').removeClass('expanded');
      },
      toggleNavbar: function () {
        $(document).foundation('topbar', 'toggle');
      }
    }
  });

})();
