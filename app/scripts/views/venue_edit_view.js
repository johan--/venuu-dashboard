(function () {
  'use strict';

  VenuuDashboard.VenueEditView = Ember.View.extend({
    venueServiceCheckbox: Ember.Checkbox.extend({
      checkedObserver: function () {
        var model = this.get('venueService');
        var venue = this.get('venue');
        if (this.get('checked')) {
          venue.get('venueServices').addObject(model);
        } else {
          venue.get('venueServices').removeObject(model);
        }
      }.observes('checked')
    }),

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
    }),

    eventTypeCheckbox: Ember.Checkbox.extend({
      checkedObserver: function () {
        var model = this.get('eventType');
        var venue = this.get('venue');
        if (this.get('checked')) {
          venue.get('eventTypes').addObject(model);
        } else {
          venue.get('eventTypes').removeObject(model);
        }
      }.observes('checked')
    }),

    multipleSelect: Ember.Select.extend({
      multiple: true,
      style: 'width: 200px',
      didInsertElement: function () {
        this._super();
        if (this.get('max')) {
          this.$().chosen({
            max_selected_options: this.get('max')
          });
        } else {
          this.$().chosen();
        }
      },
      selectionChanged: function () {
        this.$().trigger('chosen:updated');
      }.observes('content')
    })
  });

})();
