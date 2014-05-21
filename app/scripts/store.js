(function () {
  'use strict';

  /**
   * Use fixtures as the backend.
   *
   * buildUrl -> Add .json to all urls
   * updateRecord -> Catch 404 error
   * createRecord -> Catch 404 error and give fake id
   * updateRecord -> Catch 404 error
   */

  var fakeId = 123;

  function mock(method) {
    return function () {
      return this._super.apply(this._super, arguments).catch(function () {
        console.log('Dummy backend ' + method + ' done.');
      });
    };
  }

  DS.RESTAdapter.reopen({
    namespace: 'fixtures',

    buildURL: function (record, suffix) {
      return this._super(record, suffix) + '.json';
    },

    updateRecord: function (store, type, record) {
      return mock('update').apply(this, arguments);
/*      return this._super(store, type, record).catch(function () {
        console.log('Dummy backend update done.');
      });*/
    },

    createRecord: function (store, type, record) {
      return this._super(store, type, record).catch(function () {
        record.id = ++fakeId;
        console.log('Dummy backend create done.');
      });
    },

    deleteRecord: function (store, type, record) {
      return this._super(store, type, record).catch(function () {
        console.log('Dummy backend destroy done.');
      });
    }
  });

  VenuuDashboard.ApplicationAdapter = DS.RESTAdapter.extend();

})();