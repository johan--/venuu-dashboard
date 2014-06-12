class CreateVenuesServicesAvailable < ActiveRecord::Migration
  def change
    create_table :venues_services_available do |t|
      t.integer :venue_id
      t.integer :venue_service_id
    end
  end
end
