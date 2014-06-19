(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    contentTemplate: undefined,
    sidebarTemplate: 'index_sidebar',
    renderTemplate: function (controller, model) {
      //bind template parameter to render if provided
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
        outlet: 'sidebar'
      });
    }
  });


  VD.LoadingRoute = VD.Route.extend({});

  VenuuDashboard.confirmTransition = function (controllerName) {
    return function (transition) {
      var route = this;
      var model = this.controllerFor(controllerName).get('model');
      var modal = $('#confirmModal');
      console.log(route);
      if (model.get('isDirty')) {
        transition.abort();
        modal.foundation('reveal', 'open');
        $('.cancel', modal).click(function () {
          modal.foundation('reveal', 'close');
        });
        $('.confirm', modal).click(function () {
          modal.foundation('reveal', 'close');
          model.rollback();
          transition.retry();
        });
      }
    };
  };


})();
