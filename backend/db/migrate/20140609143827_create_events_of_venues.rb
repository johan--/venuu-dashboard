class CreateEventsOfVenues < ActiveRecord::Migration
  def change
    create_table :events_of_venues do |t|
      t.integer :venue_id
      t.integer :event_type_id
    end
  end
end
