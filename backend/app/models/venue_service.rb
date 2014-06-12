class VenueService < ActiveRecord::Base
  has_and_belongs_to_many :venues, join_table: :venues_services_available
  belongs_to :venue_service_category
end
