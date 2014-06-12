(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    contentTemplate: undefined,
    sidebarTemplate: 'index_sidebar',
    renderTemplate: function (controller, model) {
      var myContentRender=this.contentTemplate?this.render.bind(this,this.contentTemplate):this.render.bind(this);
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
    }
  });

})();
