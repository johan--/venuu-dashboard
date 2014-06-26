(function () {
  'use strict';

  VenuuDashboard.VenueIndexController = Ember.ArrayController.extend();

  var wizardSteps = ['index', 'pricing', 'types', 'services', 'done'];

  VenuuDashboard.VenueEditController = Ember.ObjectController.extend({
    init: function () {
      this._super();
      this.set('allVenueTypes', this.get('store').find('venueType'));
      this.set('allVenueServices', this.get('store').find('venueService'));
      this.set('allEventTypes', this.get('store').find('eventType'));
      this.set('allVenueGroups', this.get('store').find('venueGroup'));
    },

    isFirstPage: function () {
      return this.get('currentStep') === 'index';
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

    // Common functions in actions
    saveFailure: function (response) {
      console.error('save failure', response);
      this.get('alert').error('Save failed!');
    },
    transitionToVenueIndex: function () {
      this.get('alert').clear();
      this.transitionToRoute('venue');
    },

    actions: {
      save: function () {
        this.save().catch(this.saveFailure.bind(this));
      },
      stepBack: function () {
        var self = this;

        var currentIndex = wizardSteps.indexOf(self.get('currentStep'));

        if (currentIndex === 0) {
          return;
        }

        function transitionToPrev() {
          var prev = wizardSteps[currentIndex - 1];
          self.set('currentStep', prev);
          self.transitionToRoute('venue.wizard.' + prev);
        }

        self.save().then(transitionToPrev).catch(this.saveFailure.bind(this));
      },
      step: function () {
        var self = this,
          alert = this.get('alert');

        function transitionToNext() {
          alert.clear();
          var currentIndex = wizardSteps.indexOf(self.get('currentStep'));
          var next = wizardSteps[currentIndex + 1];

          if (next === 'done') {
            return self.transitionToRoute('venue');
          }
          self.get('completedSteps').push(self.get('currentStep'));
          self.set('currentStep', next);
          self.transitionToRoute('venue.wizard.' + next);
        }

        self.save().then(transitionToNext)
            .catch(this.saveFailure.bind(this));
      },
      edit: function () {
        this.save().then(this.transitionToVenueIndex.bind(this))
            .catch(this.saveFailure.bind(this));
      },
      destroy: function () {
        this.get('model').destroyRecord()
          .then(this.transitionToVenueIndex.bind(this));
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

  // Add step helpers for disabling buttons in sidebar
  // Hacky, but is easier and better contained than collectionview+itemview:
  // http://stackoverflow.com/a/12855636
  var stepHelpers = {};
  wizardSteps.forEach(function (step) {
    stepHelpers['is' + step.capitalize + 'Completed'] = function (step) {
      return this.get('completedSteps').contains(step);
    }.property('currentStep');
  });
  // Inject the test helpers to the controller
  VenuuDashboard.VenueEditController = VenuuDashboard.VenueEditController.reopen(stepHelpers);

})();
