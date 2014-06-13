(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    contentTemplate: undefined,
    sidebarTemplate: 'index_sidebar',
    renderTemplate: function (controller, model) {
      if (!this.contentController) {
        if (this.contentTemplate) {
          this.render(this.contentTemplate);
        } else {
          this.render();
        }
      } else {
        if (this.contentTemplate) {
          this.render(this.contentTemplate, {
            controller: this.contentController
          });
        } else {
          this.render({
            controller: this.contentController
          });
        }
      }
      this.render(this.sidebarTemplate, {
        into: 'application',
        outlet: 'sidebar'
      });
    }
  });

})();
