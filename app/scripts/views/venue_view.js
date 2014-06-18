(function () {
  'use strict';

  VenuuDashboard.VenueEditView = Ember.View.extend({
    multipleSelect: Ember.Select.extend({
      multiple: true,
      classNames: ['m-chosen-select'],

      didInsertElement: function () {
        this._super();
        var options = {
          inherit_select_classes: true,
          max_selected_options: this.get('max'),
          placeholder_text_multiple: this.get('placeholder'),
          no_results_text: this.get('notFound'),
          display_selected_options: false
        };
        this.$().chosen(options);
      }
    })
  });

  VenuuDashboard.VenueNewView = VD.VenueEditView.extend({
    controller: 'venueEdit'
  });

})();
