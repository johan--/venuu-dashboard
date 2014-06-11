class VenueType < ActiveRecord::Base
  has_and_belongs_to_many :venues, join_table: :types_of_venues
end
