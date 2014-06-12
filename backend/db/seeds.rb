venue_types_list = ['Juhlasali',
                    'Tapahtumatila',
                    'Saunatila',
                    'Kokoushuone',
                    'Ravintola',
                    'Kahvila',
                    'Baari / Lounge',
                    'Yökerho',
                    'Kabinetti',
                    'Hotelli',
                    'Kartano / Huvila',
                    'Teollisuusrakennus',
                    'Museo',
                    'Galleria',
                    'Studio',
                    'Ateljee',
                    'Auditorio',
                    'Konserttisali',
                    'Kongressikeskus',
                    'Kellari',
                    'Teatteri',
                    'Elokuvateatteri',
                    'Halli',
                    'Kasvihuone',
                    'Luokkahuone',
                    'Coworking-tila',
                    'Teltta',
                    'Golf-klubi',
                    'Linna',
                    'Maatila',
                    'Myymälä',
                    'Uimahalli / Kylpylä',
                    'Laiva / Vene',
                    'Terassi / Piha',
                    'Bunkkeri',
                    'Mökki',
                    'Loft-huoneisto',
                    'Yksityisasunto',
                    'Keilahalli',
                    'Kiipeilykeskus',
                    'Biljardisali',
                    'Biletila',
                    'Luentosali',
                    'Oleskelutila']


event_types_list = [
  'Juhlat',
  'Häät',
  'Saunailta',
  'Mökkireissu',
  'Kokous / tapaaminen / workshop',
  'Illallinen',
  'Taide- / näytöstapahtuma',
  'Virkistystapahtuma / TYHY',
  'Messut',
  'Seminaari / konferenssi'
]

#Seed everything in one transaction
ActiveRecord::Base.transaction do
  # Seed venue and event types based on the *_lists above
  venue_types_list.each do |name|
    VenueType.create(name: name)
  end

  event_types_list.each do |name|
    EventType.create(name: name)
  end

  # Seed VenueGroup and Venues

  kongressikeskus = VenueGroup.create(
    name: 'Kongressikeskus',
    address: 'Betonimiehenkatu 1',
    zipcode: '00220',
    city: 'Espoo'
  )

  kongressikeskus.venues.create(
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
    title: 'Murphy, Douglas and Sawayn 4'
  )

  # Add Venue and Event types
  kongressikeskus.venues.first.venue_types = [VenueType.first, VenueType.last]
  kongressikeskus.venues.first.event_types = [EventType.first, EventType.last]

  kongressikeskus.venues.create(
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
    slug: 'new-testing-thingy-1',
    title: 'Testing'
  )

  keskusta = VenueGroup.create(
    name: 'Keskusta',
    address: 'Runeberginkatu 1',
    zipcode: '00100',
    city: 'Helsinki'
  )

  keskusta.venues.create(
    title: 'Teerenpeli',
    slug: 'wonderful-recreational-venue-1'
  )

  keskusta.venues.create(
    title: 'Kamppi',
    slug: 'kauppakeskus-venue-1'
  )

  kategoriaRuoka = VenueServiceCategory.create(
    id: 1,
    name: 'ruoka'
  )

  kategoriaTK = VenueServiceCategory.create(
    name: 'tekniikka ja kalusto'
  )

  kategoriaRuoka.venue_services.create(
    id: 1,
    name: 'Pitopalvelu tilan kautta',
    negation: ''
  )

  kategoriaRuoka.venue_services.create(
    id: 2,
    name: 'Tilalla A-oikeudet',
    negation: 'Tilalla ei ole A-oikeuksia'
  )

  kategoriaTK.venue_services.create(
    id: 6,
    name: 'WiFi',
    negation: 'NoFi'
  )

  kategoriaTK.venue_services.create(
    id: 37,
    name: 'Diskopallo :)',
    negation: 'Only sorrow :('
  )

  kongressikeskus.venues.first.venue_services = [
    kategoriaRuoka.venue_services.find(1),
  kategoriaTK.venue_services.find(37)]
end
