(function () {
  'use strict';

  // A base route to set controllers and templates.
  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    sidebarController: 'indexSidebar',
    contentTemplate: undefined,
    sidebarTemplate: 'index_sidebar',
    renderTemplate: function (controller, model) {
      // Bind template parameter to render if provided.
      var myContentRender = this.contentTemplate ?
        this.render.bind(this, this.contentTemplate) :
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
        outlet: 'sidebar',
        controller: this.sidebarController
      });
    }
  });

  // Enable loading animation (see loading.hbs).
  VD.LoadingRoute = VD.Route.extend();

})();
