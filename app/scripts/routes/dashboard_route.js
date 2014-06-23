(function () {
  'use strict';


  VenuuDashboard.Route = Ember.Route.extend({
    contentController: undefined,
    sidebarController: 'indexSidebar',
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
        outlet: 'sidebar',
        controller: this.sidebarController
      });
    }
  });

  VD.LoadingRoute = VD.Route.extend();

  VenuuDashboard.confirmTransition = function (controllerName, scope) {
    return function (transition) {
      if (!VenuuDashboard.CONFIRM_UNSAVED ||
        (scope && transition.targetName.indexOf(scope) !== -1)) {
        return true;
      }
      var model = this.controllerFor(controllerName).get('model');
      var modal = $('#confirmModal');
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
      return true;
    };
  };


})();
