(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend();

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    init: function () {
      this._super();
      this.set('allVenueTypes', this.get('store').find('venueType'));
      this.set('allVenueServices', this.get('store').find('venueService'));
      this.set('allEventTypes', this.get('store').find('eventType'));
      this.set('allVenueGroups', this.get('store').find('venueGroup'));
    },

    wizardSteps: ['index', 'pricing', 'types', 'services', 'done'],

    isFirstPage: function () {
      return this.get('currentStep') === 'index';
    }.property('currentStep'),

    // Could not find a way to give parameters from template...
    isIndexCompleted: function () {
      return this.get('completedSteps').contains('index');
    }.property('currentStep'),
    isPricingCompleted: function () {
      return this.get('completedSteps').contains('pricing');
    }.property('currentStep'),
    isTypesCompleted: function () {
      return this.get('completedSteps').contains('types');
    }.property('currentStep'),
    isServicesCompleted: function () {
      return this.get('completedSteps').contains('services');
    }.property('currentStep'),

    save: function () {
      var self = this,
        venue = this.get('model'),
        venueGroup = venue.get('venueGroup');

      function saveVenue() {
        return venue.save();
      }

      if (venueGroup && venueGroup.get('isDirty')) {
        return venueGroup.save().then(saveVenue);
      }

      return saveVenue();
    },

    actions: {
      save: function () {
        var self = this;

        function failure(response) {
          console.error('save failure', response);
          self.get('alert').error('Save failed!');
        }
        this.save().catch(failure);
      },
      stepBack: function () {
        var self = this;

        var currentIndex = self.wizardSteps.indexOf(self.get('currentStep'));

        if (currentIndex === 0) {
          return;
        }

        function transitionToPrev() {
          var prev = self.wizardSteps[currentIndex - 1];
          self.set('currentStep', prev);
          self.transitionToRoute('venue.wizard.' + prev);
        }

        self.save().then(transitionToPrev);
      },
      step: function () {
        var self = this,
          alert = this.get('alert');

        function transitionToNext() {

          alert.clear();
          var currentIndex = self.wizardSteps.indexOf(self.get('currentStep'));
          var next = self.wizardSteps[currentIndex + 1];

          if (next === 'done') {
            if (window.agent) {
              window.agent.stop();
              window.agent.play('SendMail', undefined, function () {
                window.agent.hide();
              });
            }
            return self.transitionToRoute('venue');
          }
          if (window.agent) {
            window.agent.stop();
            window.agent.moveTo(30, 550);
            window.agent.play('GetWizardy');
          }
          self.get('completedSteps').push(self.get('currentStep'));
          self.set('currentStep', next);
          self.transitionToRoute('venue.wizard.' + next);
        }

        function failure(response) {
          console.error('save failure', response);
          alert.error('This is an error alert!');
        }

        self.save().then(transitionToNext).catch(failure);
      },
      edit: function () {
        var self = this,
          alert = this.get('alert');

        function transitionToIndex() {
          alert.clear();
          self.transitionToRoute('venue');
        }

        function failure(response) {
          console.error('save failure', response);
          alert.error('This is an error alert!');
        }

        self.save().then(transitionToIndex).catch(failure);
      },
      destroy: function () {
        var self = this;

        function transitionToVenueIndex() {
          self.transitionToRoute('venue');
        }

        this.get('model').destroyRecord()
          .then(transitionToVenueIndex);
      },
      createVenueGroup: function () {
        this.get('model').set('venueGroup',
          this.get('store').createRecord('venueGroup'));
      },
      cancelNewVenueGroup: function () {
        this.get('model').get('venueGroup').rollback();
      }
    }
  });

})();
