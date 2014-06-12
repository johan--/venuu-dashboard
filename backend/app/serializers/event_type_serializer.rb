class EventTypeSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name
end
