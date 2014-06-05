(function () {
  'use strict';

  VenuuDashboard.VenueController = Ember.ObjectController.extend({
    actions: {
      goto: function (anchor) {
        var $target = $('[data-magellan-destination="' + anchor + '"]');
        $(document.body).scrollTop($target.offset().top);
      },
    }
  });

})();
