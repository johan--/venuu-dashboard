class EventType < ActiveRecord::Base
  has_and_belongs_to_many :venues, join_table: :events_of_venues
end
