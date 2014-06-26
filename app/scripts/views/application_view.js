(function () {
  'use strict';

  VenuuDashboard.ApplicationView = Ember.View.extend({
    initFoundation: function () {
      //console.log('Init Foundation top-bar.');
      this.$(document).foundation();
    }.on('didInsertElement')
  });

  VenuuDashboard.VenueWizardView = Ember.View.extend({
    initClippy: function () {
      window.clippy.load('Clippy', function (agentti) {
        $(document).scrollTop(0, 0);
        window.agent = agentti;
        window.agent.show(true);
        window.agent.moveTo(30, 550);
        window.agent.play('GetAttention');
        var p = $('#title').offset();
        window.agent.speak('It seems that you\'re creating a venue. \n' +
          'Would you like some help?');
        window.agent.play('Explain');
        window.agent.moveTo(p.left - 200, p.top - 25);
        window.agent.speak('Write the name of the venue here.');
        window.agent.play('GestureLeft');
        p = $('#step').offset();
        window.agent.moveTo(p.left - 120, p.top - 25);
        window.agent.speak('Then click here to continue!');
        window.agent.play('GestureLeft');
        window.agent.moveTo(30, 550);
      });
    }.on('didInsertElement')
  });

})();
