class VenueServiceCategorySerializer < ActiveModel::Serializer
  attributes :name
  has_many :venue_services
end
