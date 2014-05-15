VenuuDashboard.Router.reopen({
  location: 'history'
});

VenuuDashboard.Router.map(function () {

  this.resource('venues', function () {
    this.resource('venue', {
      path: '/:venue_id'
    }, function () {
      this.route('edit');
    });
    this.route('create');
  });

});