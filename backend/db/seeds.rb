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

services_list = [
  {
    id: 1,
    name: 'Tilalla oma pitopalvelu',
    negation: 'Tilalla ei omaa pitopalvelua'
  },
  {
    id: 2,
    name: 'Omat ruoat mahdolliset',
    negation: 'Ei omia ruokia'
  },
  {
    id: 3,
    name: 'Tilalla A-oikeudet',
    negation: 'Tilalla ei ole A-oikeuksia'
  },
  {
    id: 4,
    name: 'Omat juomat sallittu',
    negation: 'Ei omia juomia'
  },
  {
    id: 6,
    name: 'WiFi',
    negation: ''
  },
  {
    id: 7,
    name: 'Videotykki tai vastaava',
    negation: ''
  },
  {
    id: 8,
    name: 'TV',
    negation: ''
  },
  {
    id: 9,
    name: 'Pro äänilaitteisto',
    negation: ''
  },
  {
    id: 10,
    name: 'Kevyt äänentoisto',
    negation: ''
  },
  {
    id: 11,
    name: 'Pro valaistustekniikka',
    negation: ''
  },
  {
    id: 13,
    name: 'Keittiö asiakkaan käytössä',
    negation: ''
  },
  {
    id: 35,
    name: 'Fläppi- / Valkotaulu',
    negation: ''
  },
  {
    id: 36,
    name: 'Pelikonsoli',
    negation: ''
  },
  {
    id: 37,
    name: 'Diskopallo :)',
    negation: ''
  },
  {
    id: 44,
    name: 'Kokous- / Kahvitarjoilu',
    negation: ''
  },
  {
    id: 28,
    name: 'Pitopalvelu yhteistyökumppanien kautta',
    negation: 'Ei pitopalvelua yhteistyökumppanien kautta'
  },
  {
    id: 14,
    name: 'Kattotila',
    negation: ''
  },
  {
    id: 15,
    name: 'Terassi',
    negation: ''
  },
  {
    id: 16,
    name: 'Uima-allas',
    negation: ''
  },
  {
    id: 17,
    name: 'Esiintymislava',
    negation: ''
  },
  {
    id: 18,
    name: 'Sauna',
    negation: ''
  },
  {
    id: 19,
    name: 'Majoittumismahdollisuus',
    negation: ''
  },
  {
    id: 45,
    name: 'Piha',
    negation: ''
  },
  {
    id: 47,
    name: 'Palju / poreallas',
    negation: ''
  },        {
    id: 21,
    name: 'Maalla',
    negation: ''
  },
  {
    id: 22,
    name: 'Teollisuusalueella',
    negation: ''
  },
  {
    id: 23,
    name: 'Saaressa',
    negation: ''
  },
  {
    id: 24,
    name: 'Veden rannalla',
    negation: ''
  },
  {
    id: 26,
    name: 'Ilmainen parkki',
    negation: ''
  },
  {
    id: 38,
    name: 'Keskustassa',
    negation: ''
  },
  {
    id: 39,
    name: 'Luonnon äärellä',
    negation: ''
  },
  {
    id: 46,
    name: 'Kauniit näkymät',
    negation: ''
  },
  {
    id: 40,
    name: 'Tila mahdollista vuokrata ilman tuotantopalveluita',
    negation: ''
  },
  {
    id: 41,
    name: 'Autamme tapahtumatuotannossa',
    negation: ''
  },
  {
    id: 42,
    name: 'Tapahtumatuotanto yhteistyökumppaneiden kautta',
    negation: ''
  }
]

categories_list = [
  'Ruoka',
  'Tekniikka ja kalusto',
  'Juomat',
  'Tilaan kuuluu',
  'Ympäristö',
  'Tapahtumatuotanto'
]


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

  services_list.each do |service|
    VenueService.create(service)
  end

  categories_list.each do |category|
    VenueServiceCategory.create(name: category)
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
    zipcode: 1337,
    address: 'Muprhystreet 4',
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

  kongressikeskus.venues.first.venue_services = [
    VenueService.find(1),
    VenueService.find(37)
  ]
end


# Connect venue_services to venue_service_categories
ActiveRecord::Base.transaction do
  VenueServiceCategory.first.venue_services = VenueService.find([1,44,28,2])
  VenueServiceCategory.find(2).venue_services = VenueService.find([6,7,8,9,10,11,13,35,36,37])
  VenueServiceCategory.find(3).venue_services = VenueService.find([3,4])
  VenueServiceCategory.find(4).venue_services = VenueService.find([14,15,16,17,18,19,45,47])
  VenueServiceCategory.find(5).venue_services = VenueService.find([21,22,23,24,26,38,39,46])
  VenueServiceCategory.find(6).venue_services = VenueService.find([40,41,42])
end
