VenuuDashboard.VenueInputComponent = Ember.Component.extend({
  labelColSize: function () {
    return 'small-' + this.get('labelCol');
  }.property('labelCol'),

  inputColSize: function () {
    return 'small-' + this.get('inputCol');
  }.property('inputCol')
});
