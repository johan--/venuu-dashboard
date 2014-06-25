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

    isIndexCompleted: function () {
      return this.get('completedSteps').indexOf('index') !== -1;
    }.property('currentStep'),
    isPricingCompleted: function () {
      return this.get('completedSteps').indexOf('pricing') !== -1;
    }.property('currentStep'),
    isTypesCompleted: function () {
      return this.get('completedSteps').indexOf('types') !== -1;
    }.property('currentStep'),
    isServicesCompleted: function () {
      return this.get('completedSteps').indexOf('services') !== -1;
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
      stepBack: function () {
        var self = this;

        var currentIndex = self.wizardSteps.indexOf(self.get('currentStep'));

        if (currentIndex === 0) {
          return;
        }

        //this.get('model').rollback();

        var prev = self.wizardSteps[currentIndex - 1];
        self.set('currentStep', prev);
        self.transitionToRoute('venue.wizard.' + prev);
      },
      step: function () {
        var self = this,
          alert = this.get('alert');

        function transitionToNext(record) {
          alert.clear();
          var currentIndex = self.wizardSteps.indexOf(self.get('currentStep'));
          var next = self.wizardSteps[currentIndex + 1];

          if (next === 'done') {
            return self.transitionToRoute('venue');
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

        function transitionToIndex(record) {
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
