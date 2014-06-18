VD.XWoofComponent = Ember.Component.extend({
  messages: Ember.computed.alias('woof')
});

VD.XWoofMessageComponent = Ember.Component.extend({
  click: function() {
    var self = this;
    self.woof.removeObject(self.get('message'));
  }
});

Ember.Woof = Ember.ArrayProxy.extend({
  content: Ember.A(),
  danger: function(message) {
    this.pushObject({
      type: 'danger',
      message: message
    });
  }
});

Ember.Application.initializer({
  name: 'injectErrorMessages',

  initialize: function(container, application) {
    application.register('woof:main', Ember.Woof);
    application.inject('controller', 'woof', 'woof:main');
    application.inject('component',  'woof', 'woof:main');
    application.inject('route',      'woof', 'woof:main');
  }
});
