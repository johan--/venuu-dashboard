
//a   simplified version of http://reefpoints.dockyard.com/2014/05/01/alert-messages-in-ember-apps.html

VD.VAlertComponent = Ember.Component.extend({
  messages: Ember.computed.alias('alert')
});

VD.VAlertMessageComponent = Ember.Component.extend({
  actions: {
    close_error: function () {
      var self = this;
      self.alert.removeObject(self.get('message'));
    }
  }
});

Ember.Alert = Ember.ArrayProxy.extend({
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
    application.register('alert:main', Ember.Alert);
    application.inject('controller', 'alert', 'alert:main');
    application.inject('component',  'alert', 'alert:main');
    application.inject('route',      'alert', 'alert:main');
  }
});
