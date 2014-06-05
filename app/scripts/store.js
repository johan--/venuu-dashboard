(function () {
  'use strict';

  VenuuDashboard.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api'
  });

  VenuuDashboard.ApplicationSerializer = DS.ActiveModelSerializer.extend();

})();
