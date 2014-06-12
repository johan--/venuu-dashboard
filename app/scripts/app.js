(function () {
  'use strict';

  Ember.ENV.RAISE_ON_DEPRECATION = true;
  Ember.LOG_STACKTRACE_ON_DEPRECATION = true;

  var VenuuDashboard = window.VenuuDashboard = Ember.Application.create({
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
  });

  /* Order and include as you please. */
  require('scripts/components/*');
  require('scripts/controllers/*');
  require('scripts/helpers/*');
  require('scripts/store');
  require('scripts/models/*');
  require('scripts/routes/*');
  require('scripts/views/*');
  require('scripts/router');

})();
