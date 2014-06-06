(function () {
  'use strict';

  VenuuDashboard.Router.reopen({
    rootURL: '/dashboard/',
    location: 'history'
  });

  VenuuDashboard.Router.map(function () {

    this.resource('venue_group', {
      path: '/venue-group'
    }, function () {
      this.route('new');
      this.route('edit', {
        path: '/:venue_group_id'
      });
    });

    this.resource('venue', {
      path: '/venue'
    }, function () {
      this.route('new');
      this.route('edit', {
        path: '/:venue_id'
      });
    });

  });

})();
