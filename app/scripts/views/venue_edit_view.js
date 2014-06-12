(function () {
  'use strict';

  VenuuDashboard.VenueEditView = Ember.View.extend({
    /*    initChosen: function () {
      $('input[type="checkbox"]' , '#' + this.elementId).chosen();
      console.log(this, arguments);
    }.on('didInsertElement'),*/

    venueTypeCheckbox: Ember.Checkbox.extend({
      checkedObserver: function () {
        var model = this.get('venueType');
        var venue = this.get('venue');
        if (this.get('checked')) {
          venue.get('venueTypes').addObject(model);
        } else {
          venue.get('venueTypes').removeObject(model);
        }
      }.observes('checked')
    })
  });

})();
