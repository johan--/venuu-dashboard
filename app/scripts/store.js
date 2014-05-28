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

  var fakeId = 2;

  /** Return a mock function that calls super method and catches any error. */
  function mock(method) {
    return function mocked() {
      return this._super.apply(this, arguments).catch(function () {
        console.log('Dummy backend ' + method + ' done.');
      });
    };
  }

  VenuuDashboard.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'fixtures',


    buildURL: function (record, suffix) {
      return this._super(record, suffix) + '.json';
    },

    createRecord: function (store, type, record) {
      record.set('id', ++fakeId);
      return mock('create').apply(this, arguments);
    },

    updateRecord: mock('update'),
    deleteRecord: mock('delete')

  });

  VenuuDashboard.ApplicationSerializer = DS.ActiveModelSerializer.extend();

})();
