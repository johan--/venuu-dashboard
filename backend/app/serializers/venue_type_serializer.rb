class VenueTypeSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name
end
