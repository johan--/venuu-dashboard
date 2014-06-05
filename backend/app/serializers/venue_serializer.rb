class VenueSerializer < ActiveModel::Serializer
  attributes :id, *Venue.publicAttributes

end
