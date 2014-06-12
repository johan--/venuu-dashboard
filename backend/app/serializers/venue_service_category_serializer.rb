class VenueServiceCategorySerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name
  has_many :venue_services
end
