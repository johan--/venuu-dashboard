class VenueGroupSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name, :address, :zipcode, :city
  has_many :venues
end
