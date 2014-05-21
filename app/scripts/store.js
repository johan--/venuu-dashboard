(function () {
  'use strict';

  VenuuDashboard.ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'fixtures',

    pathForType: function (type) {
      var underscored = Ember.String.underscore(type);
      return Ember.String.pluralize(underscored);
    },
    buildURL: function (record, suffix) {
      return this._super(record, suffix) + '.json';
    }
  });

  VenuuDashboard.ApplicationSerializer = DS.RESTSerializer.extend({
    keyForAttribute: function (attr) {
      console.log(attr);
      return Ember.String.underscore(attr);
    },
    typeForRoot: function (root) {
      var camelized = Ember.String.camelize(root);
      return Ember.String.singularize(camelized);
    }
  });

})();