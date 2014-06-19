
//a   simplified version of http://reefpoints.dockyard.com/2014/05/01/alert-messages-in-ember-apps.html

VD.VWoofComponent = Ember.Component.extend({
  messages: Ember.computed.alias('woof')
});

VD.VWoofMessageComponent = Ember.Component.extend({
  actions: {
    close_error: function () {
      var self = this;
      self.woof.removeObject(self.get('message'));
    }
  }
});

Ember.Woof = Ember.ArrayProxy.extend({
  content: Ember.A(),
  error: function (message) {
    this.pushObject({
      message: message
    });
  }
});

Ember.Application.initializer({
  name: 'injectErrorMessages',

  initialize: function (container, application) {
    application.register('woof:main', Ember.Woof);
    application.inject('controller', 'woof', 'woof:main');
    application.inject('component',  'woof', 'woof:main');
    application.inject('route',      'woof', 'woof:main');
  }
});
