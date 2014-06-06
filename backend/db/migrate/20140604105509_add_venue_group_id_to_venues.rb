class AddVenueGroupIdToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :venue_group_id, :integer
  end
end
