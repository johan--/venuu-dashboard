(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    sidebarTemplate: 'index_sidebar',
    renderTemplate: function (controller, model) {
      if (!this.contentController) {
        this.render();
      } else {
        this.render({
          controller: this.contentController
        });
      }
      this.render(this.sidebarTemplate, {
        into: 'application',
        outlet: 'sidebar'
      });
    }
  });

})();
