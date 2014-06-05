# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


VenueGroup.create(name: 'Kongressikeskus', address: 'Betonimiehenkatu 1', zipcode: '00220', city: 'Espoo')

Venue.create(
      additional_service_category_description: 'Palveluista ja puitteista tarkemmin',
      cancellation_policy: 'Peruutusehdot',
      capacity_banquet: 1,
      capacity_classroom: 400,
      capacity_conference: 400,
      capacity_details: 'Tilakapasiteetista tarkemmin',
      capacity_sitting: 617,
      capacity_standing: 1214,
      capacity_theater: 400,
      capacity_u_shape: 400,
      cleaning_fee: 400,
      contact_email: 'jerrold@kutch.name',
      contact_phone: '+35840123457',
      conversations_count: 0,
      description: 'Lorem ipsum Quis enim ad esse exercitation dolore laborum amet est id officia dolor irure incididunt nostrud in velit.',
      floor_area: 64,
      pitch: 'Yhden/kahden lauseen kuvaus tilasta.',
      pricing_details: 'Hinnoittelusta tarkemmin',
      published: true,
      rent_per_day: 200,
      rent_per_hour: 400,
      rent_per_person: 200,
      reservation_fee: 200,
      reviews_average: 0.0,
      reviews_count: 0,
      sales_guarantee: 200,
      security_deposit: 400,
      slug: 'murphy-douglas-and-sawayn-4',
      title: 'Murphy, Douglas and Sawayn 4',
      venue_group_id: 1
  )

Venue.create(
      additional_service_category_description: 'Palveluista ja puitteista tarkemmin',
      cancellation_policy: 'Peruutusehdot',
      capacity_banquet: 1,
      capacity_classroom: 400,
      capacity_conference: 400,
      capacity_details: 'Tilakapasiteetista tarkemmin',
      capacity_sitting: 617,
      capacity_standing: 1214,
      capacity_theater: 400,
      capacity_u_shape: 400,
      cleaning_fee: 400,
      contact_email: 'jerrold@kutch.name',
      contact_phone: '+35840123457',
      conversations_count: 0,
      description: 'Lorem ipsum Quis enim ad esse exercitation dolore laborum amet est id officia dolor irure incididunt nostrud in velit.',
      floor_area: 64,
      pitch: 'Yhden/kahden lauseen kuvaus tilasta.',
      pricing_details: 'Hinnoittelusta tarkemmin',
      published: true,
      rent_per_day: 200,
      rent_per_hour: 400,
      rent_per_person: 200,
      reservation_fee: 200,
      reviews_average: 0.0,
      reviews_count: 0,
      sales_guarantee: 200,
      security_deposit: 400,
      slug: 'new',
      title: 'Testing',
      venue_group_id: 2
  )
