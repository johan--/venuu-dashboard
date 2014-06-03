class CreateVenueGroups < ActiveRecord::Migration
  def change
    create_table :venue_groups do |t|
      t.string :name
      t.string :address
      t.string :zipcode
      t.string :city

      t.timestamps
    end
  end
end
