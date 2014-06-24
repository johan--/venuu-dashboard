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

  VD.LoadingRoute = VD.Route.extend();

  VenuuDashboard.confirmTransition = function (controllerName, scope) {
    return function (transition) {
      // Don't show modal if transition happens inside parent scope.
      if (!VenuuDashboard.CONFIRM_UNSAVED ||
        (scope && transition.targetName.indexOf(scope) !== -1)) {
        return true;
      }
      var model = this.controllerFor(controllerName).get('model');
      var confirmModal = $('#confirmModal');
      if (model.get('isDirty')) {
        transition.abort();
        confirmModal.foundation('reveal', 'open');
        $('.cancel', confirmModal).click(
          confirmModal.foundation.bind(confirmModal, 'reveal', 'close'));
        $('.confirm', confirmModal).click(function () {
          confirmModal.foundation('reveal', 'close');
          model.rollback();
          transition.retry();
        });
      }
      return true;
    };
  };


})();
