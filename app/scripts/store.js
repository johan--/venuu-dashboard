(function () {
  'use strict';

  VenuuDashboard.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api'
  });

  VenuuDashboard.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    /*
    Embed ids for hasMany relationships
    Sources: http://jsfiddle.net/jgillick/LNXyp/9/
    https://github.com/emberjs/data/blob/v1.0.0-beta.8/packages/ember-data/lib/serializers/json_serializer.js#L447
    */
    serializeHasMany: function (record, json, relationship) {
      var key = relationship.key;
      var payloadKey = this.keyForRelationship ? this.keyForRelationship(key, 'hasMany') : key;
      if (relationship.kind === 'hasMany') {
        json[payloadKey] = Ember.get(record, key).mapBy('id');
      }
    }
  });

})();
