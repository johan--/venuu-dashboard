VenuuDashboard.FormComponent = Ember.Component.extend({
  classNameBindings: ['widthClass', ':columns'],

  widthClass: function () {
    return 'medium-' + (this.get('width') || '12');
  }.property('width'),
});
