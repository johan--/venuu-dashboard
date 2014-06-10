VenuuDashboard.VInputComponent = Ember.Component.extend({
  classNameBindings: ['notRow::row'],

  labelColSize: function () {
    return 'small-' + this.get('labelCol');
  }.property('labelCol'),

  inputColSize: function () {
    return 'small-' + this.get('inputCol');
  }.property('inputCol')
});
