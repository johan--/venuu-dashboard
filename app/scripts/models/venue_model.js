(function () {
  'use strict';

  VenuuDashboard.Venue = DS.Model.extend({
    group: DS.attr(),
    additional_service_category_description: DS.attr('string'),
    //billing_id: DS.belongsTo('billing'),
    cancellation_policy: DS.attr('string'),
    capacity_banquet: DS.attr('number'),
    capacity_classroom: DS.attr('number'),
    capacity_conference: DS.attr('number'),
    capacity_details: DS.attr('string'),
    capacity_sitting: DS.attr('number'),
    capacity_standing: DS.attr('number'),
    capacity_theater: DS.attr('number'),
    capacity_u_shape: DS.attr('number'),
    cleaning_fee: DS.attr('number'),
    contact_email: DS.attr('string'),
    contact_phone: DS.attr('string'),
    conversations_count: DS.attr('number'),
    created_at: DS.attr('date'),
    description: DS.attr('string'),
    //event_type_ids: DS.hasMany('event_type'),
    event_types: DS.attr(),
    floor_area: DS.attr('number'),
    //floor_map_ids: DS.hasMany('floor_map'),
    //organization_id: DS.belongsTo('organization'),
    //photo_ids: DS.hasMany('photo'),
    pitch: DS.attr('string'),
    pricing_details: DS.attr('string'),
    published: DS.attr('boolean'),
    rent_per_day: DS.attr('number'),
    rent_per_hour: DS.attr('number'),
    rent_per_person: DS.attr('number'),
    reservation_fee: DS.attr('number'),
    reviews_average: DS.attr('number'),
    reviews_count: DS.attr('number'),
    sales_guarantee: DS.attr('number'),
    security_deposit: DS.attr('number'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    updated_at: DS.attr('date')
    //venue_group_id: DS.belongsTo('venue_group'),
    //venue_type_ids: DS.hasMany('venue_type')
  });

})();