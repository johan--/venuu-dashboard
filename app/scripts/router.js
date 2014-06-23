(function () {
  'use strict';

  VenuuDashboard.Router.reopen({
    rootURL: '/dashboard/',
    location: 'auto'
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
      this.resource('venue.wizard', {
        path: 'wizard',
        queryParams: ['vg']
      }, function () {
        this.route('pricing', { path: 'pricing' });
        this.route('types', { path: 'types' });
        this.route('services', { path: 'services' });
      });

      this.resource('venue.edit', {
        path: '/:venue_id'
      }, function () {
        this.route('pricing', { path: 'pricing' });
        this.route('types', { path: 'types' });
        this.route('services', { path: 'services' });
      });
    });

  });

})();
