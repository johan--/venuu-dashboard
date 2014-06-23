(function () {
  'use strict';

  Ember.ENV.RAISE_ON_DEPRECATION = true;
  Ember.LOG_STACKTRACE_ON_DEPRECATION = true;

  var VenuuDashboard = window.VenuuDashboard = window.VD = Ember.Application.create({
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
  });

  // Show a modal if navigating away without saving.
  VenuuDashboard.CONFIRM_UNSAVED = true;

  /* Order and include as you please. */
  require('scripts/components/v-form-component.js');
  require('scripts/components/*');

  require('scripts/controllers/*');
  require('scripts/helpers/*');
  require('scripts/store');
  require('scripts/models/*');

  require('scripts/routes/dashboard_route.js');
  require('scripts/routes/*');

  require('scripts/views/*');
  require('scripts/router');

})();
