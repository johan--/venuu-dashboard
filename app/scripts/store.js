(function () {
  'use strict';

  DS.RESTAdapter.reopen({
    namespace: 'fixtures',

    buildURL: function (record, suffix) {
      return this._super(record, suffix) + '.json';
    }
  });

  VenuuDashboard.ApplicationAdapter = DS.RESTAdapter.extend();

})();