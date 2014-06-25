(function () {
  'use strict';

  VenuuDashboard.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api'
  });

  VenuuDashboard.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    // Embed ids for hasMany relationships
    serializeHasMany: function (record, json, relationship) {
      var key = relationship.key;
      var payloadKey = this.keyForRelationship ? this.keyForRelationship(key, 'hasMany') : key;
      if (relationship.kind === 'hasMany') {
        json[payloadKey] = Ember.get(record, key).mapBy('id');
      }
    }
  });

})();
