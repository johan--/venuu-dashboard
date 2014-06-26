(function () {
  'use strict';

  VenuuDashboard.Venue = DS.Model.extend({
    address: DS.attr('string'),
    city: DS.attr('string'),
    zipcode: DS.attr('string'),
    //group: DS.attr(),
    additionalServiceCategoryDescription: DS.attr('string'),
    //billing_id: DS.belongsTo('billing'),
    cancellationPolicy: DS.attr('string'),
    capacityBanquet: DS.attr('number'),
    capacityClassroom: DS.attr('number'),
    capacityConference: DS.attr('number'),
    capacityDetails: DS.attr('string'),
    capacitySitting: DS.attr('number'),
    capacityStanding: DS.attr('number'),
    capacityTheater: DS.attr('number'),
    capacityUShape: DS.attr('number'),
    cleaningFee: DS.attr('number'),
    contactEmail: DS.attr('string'),
    contactPhone: DS.attr('string'),
    conversationsCount: DS.attr('number'),
    createdAt: DS.attr('date'),
    description: DS.attr('string'),
    //event_type_ids: DS.hasMany('event_type'),
    eventTypes: DS.hasMany('eventType', { async: true }),
    floorArea: DS.attr('number'),
    //floor_map_ids: DS.hasMany('floor_map'),
    //organization_id: DS.belongsTo('organization'),
    //photo_ids: DS.hasMany('photo'),
    pitch: DS.attr('string'),
    pricingDetails: DS.attr('string'),
    published: DS.attr('boolean'),
    rentPerDay: DS.attr('number'),
    rentPerHour: DS.attr('number'),
    rentPerPerson: DS.attr('number'),
    reservationFee: DS.attr('number'),
    reviewsAverage: DS.attr('number'),
    reviewsCount: DS.attr('number'),
    salesGuarantee: DS.attr('number'),
    securityDeposit: DS.attr('number'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    updatedAt: DS.attr('date'),
    venueGroup: DS.belongsTo('venueGroup'),
    venueTypes: DS.hasMany('venueType', { async: true }),
    venueServices: DS.hasMany('venueService', { async: true }),
    imageSrc: function () {
      return 'http://lorempixel.com/output/city-q-c-100-100-' +
        this.get('id') + '.jpg';
    }.property('id'),
    venueGroupChange: function () {
      var venueGroup = this.get('venueGroup');

      if (venueGroup) {
        setIfEmpty(this, 'address', venueGroup.get('address'));
        setIfEmpty(this, 'zipcode', venueGroup.get('zipcode'));
        setIfEmpty(this, 'city', venueGroup.get('city'));
      }
    }.observes('venueGroup')
  });

  function setIfEmpty(model, attr, val) {
    if (Ember.empty(model.get(attr))) {
      model.set(attr, val);
    }
  }

})();
