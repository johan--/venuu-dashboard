class CreateTypesOfVenues < ActiveRecord::Migration
  def change
    create_table :types_of_venues do |t|
      t.integer :venue_id
      t.integer :venue_type_id

      t.timestamps
    end
  end
end
