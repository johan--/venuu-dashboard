(function () {
  'use strict';

  VenuuDashboard.Router.reopen({
    rootURL: '/dashboard/',
    location: 'history'
  });

  VenuuDashboard.Router.map(function () {

    this.resource('venue_groups', {
      path: '/'
    }, function () {
      this.resource('venue_group', {
        path: '/location/:venue_group_id'
      }, function () {
        this.route('edit');
      });

      this.resource('venues', {
        path: '/venues'
      }, function () {
        this.resource('venue', {
          path: '/:venue_id'
        }, function () {
          this.route('edit');
        });
        this.route('new');
      });
    });
  });

})();