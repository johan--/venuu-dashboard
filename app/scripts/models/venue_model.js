/*global Ember*/
VenuuDashboard.Venue = DS.Model.extend({
  name: DS.attr('string'),

  description: DS.attr('string')
});

// probably should be mixed-in...
VenuuDashboard.Venue.reopen({
  attributes: function () {
    var model = this;
    return Ember.keys(this.get('data')).map(function (key) {
      return Em.Object.create({
        model: model,
        key: key,
        valueBinding: 'model.' + key
      });
    });
  }.property()
});

// delete below here if you do not want fixtures
VenuuDashboard.Venue.FIXTURES = [
  {
    id: 0,
    name: 'Gurula',
    description: 'Panini-mies'
  },
  {
    id: 1,
    name: 'Venuu',
    description: 'hikinen mesta'
  }
];