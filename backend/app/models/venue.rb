class Venue < ActiveRecord::Base
  belongs_to :venue_group

  has_and_belongs_to_many :venue_types, join_table: :types_of_venues
  has_and_belongs_to_many :event_types, join_table: :events_of_venues

  def self.publicAttributes
    [:additional_service_category_description,
        :cancellation_policy,
        :capacity_banquet,
        :capacity_classroom,
        :capacity_conference,
        :capacity_details,
        :capacity_sitting,
        :capacity_standing,
        :capacity_theater,
        :capacity_u_shape,
        :cleaning_fee,
        :contact_email,
        :contact_phone,
        :conversations_count,
        :description,
        :floor_area,
        :pitch,
        :pricing_details,
        :published,
        :rent_per_day,
        :rent_per_hour,
        :rent_per_person,
        :reservation_fee,
        :reviews_average,
        :reviews_count,
        :sales_guarantee,
        :security_deposit,
        :slug,
        :title,
        :venue_group_id,
        :updated_at,
        :created_at]
  end
end
