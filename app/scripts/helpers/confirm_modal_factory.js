(function () {
  'use strict';

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
