(function () {
  'use strict';

  /**
   * Use fixtures as the backend.
   *
   * buildUrl -> Add .json to all urls
   * updateRecord -> Catch 404 error
   * createRecord -> Catch 404 error and give fake id
   */

  var fakeId = 123;

  DS.RESTAdapter.reopen({
    namespace: 'fixtures',

    buildURL: function (record, suffix) {
      return this._super(record, suffix) + '.json';
    },

    updateRecord: function (store, type, record) {
      return this._super(store, type, record).catch(function (res) {
        console.log('Dummy backend update done.');
      });
    },

    createRecord: function (store, type, record) {
      return this._super(store, type, record).catch(function (res) {
        record.id = ++fakeId;
        console.log('Dummy backend create done.');
      });
    }
  });

  VenuuDashboard.ApplicationAdapter = DS.RESTAdapter.extend();

})();