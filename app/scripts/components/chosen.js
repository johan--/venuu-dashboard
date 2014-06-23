(function () {
  'use strict';

  // See https://gist.github.com/sirvine/2974141
  VenuuDashboard.Chosen = Ember.Select.extend({
    multiple: true,
    classNames: ['m-chosen-select'],
    optionValuePath: 'content.id',
    optionLabelPath: 'content.name',

    initChosen: function () {
      var options = {
        inherit_select_classes: true,
        max_selected_options: this.get('max'),
        placeholder_text_multiple: this.get('placeholder'),
        no_results_text: this.get('notFound'),
        display_selected_options: false
      };

      Ember.run.next(this, function () {
        $('#' + this.elementId).chosen(options);
      });

    }.on('didInsertElement')
  });

})();
