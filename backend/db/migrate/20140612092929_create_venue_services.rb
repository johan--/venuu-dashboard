class CreateVenueServices < ActiveRecord::Migration
  def change
    create_table :venue_services do |t|
      t.string :name
      t.string :negation
      t.integer :venue_service_category_id

      t.timestamps
    end
  end
end
