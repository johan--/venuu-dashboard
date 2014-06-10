(function () {
  'use strict';

  VenuuDashboard.IndexRoute = Ember.Route.extend({
    model: function () {
      return this.get('store').find('venue_group');
    },
    renderTemplate: function () {
      this.render('index_sidebar', {
        outlet: 'sidebar'
      });
      this.render('index', {
        outlet: 'content'
      });
    }
  });

})();
