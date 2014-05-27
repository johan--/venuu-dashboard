(function () {
  'use strict';

  VenuuDashboard.Router.reopen({
    rootURL: '/dashboard/',
    location: 'history'
  });

  VenuuDashboard.Router.map(function () {

    this.resource('venue_groups', {
      path: '/venue-group'
    }, function () {
      this.route('new');
    });

    this.route('venue_group', {
      path: '/venue-group/:venue_group_id'
    });

    this.resource('venues', {
      path: '/venue'
    }, function () {
      this.route('new');
    });

    this.route('venue', {
      path: '/venue/:venue_id'
    });

  });

})();
