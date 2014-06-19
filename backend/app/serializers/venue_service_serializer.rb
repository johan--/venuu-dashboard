class VenueServiceSerializer < ActiveModel::Serializer
  #has_one :category
  attributes :id, :name, :negation, :category

  def category
    object.venue_service_category.name
  end
end
