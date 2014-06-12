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
        console.log("model on: " + model);
        if (this.get('checked')) {
          venue.get('venueTypes').addObject(model);
        } else {
          venue.get('venueTypes').removeObject(model);
        }
      }.observes('checked')
    }),

    eventTypeCheckbox: Ember.Checkbox.extend({
      checkedObserver: function () {
        var model = this.get('eventType');
        var venue = this.get('venue');
        console.log("model on: " + model);
        if (this.get('checked')) {
          venue.get('eventTypes').addObject(model);
        } else {
          venue.get('eventTypes').removeObject(model);
        }
      }.observes('checked')
    })
  });

})();
