class CreateVenueServiceCategories < ActiveRecord::Migration
  def change
    create_table :venue_service_categories do |t|
      t.string :name

      t.timestamps
    end
  end
end
