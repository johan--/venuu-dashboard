class VenueSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, *Venue.publicAttributes
  has_many :venue_types
  has_many :venue_services
end
