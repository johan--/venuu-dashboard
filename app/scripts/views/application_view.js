(function () {
  'use strict';

  VenuuDashboard.ApplicationView = Ember.View.extend({
    initFoundation: function () {
      //console.log('Init Foundation top-bar.');
      this.$(document).foundation();
      //this.$(document).foundation('alert');
    }.on('didInsertElement')
  });

})();
