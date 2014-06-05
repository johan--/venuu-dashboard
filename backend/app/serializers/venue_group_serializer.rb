class VenueGroupSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, *VenueGroup.publicAttributes
  has_many :venues
end
