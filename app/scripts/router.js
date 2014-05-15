VenuuDashboard.Router.reopen({
  rootURL: '/dashboard/',
  location: 'history'
});

VenuuDashboard.Router.map(function () {

  this.resource('venues', {
    path: '/'
  });

  this.resource('venue', {
    path: '/venue/:venue_id'
  }, function () {
    this.route('edit');
  });
  this.route('create');

});