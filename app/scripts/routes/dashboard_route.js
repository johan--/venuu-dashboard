(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    contentTemplate: undefined,
    sidebarTemplate: 'index_sidebar',
    errorTemplate: 'error',
    renderTemplate: function (controller, model) {
      //bind template parameter to render if provided
      var myContentRender = this.contentTemplate ?
            this.render.bind(this, this.contentTemplate):
            this.render.bind(this);

      if (!this.contentController) {
        myContentRender();
      } else {
        myContentRender({
          controller: this.contentController
        });
      }

      this.render(this.sidebarTemplate, {
        into: 'application',
        outlet: 'sidebar'
      });

      this.render(this.errorTemplate, {
        into: 'application',
        outlet: 'error',
        controller: this.contentController
      });
    }
  });
})();
