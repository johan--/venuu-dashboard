class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :title
      t.text :description
      t.text :pitch
      t.integer :rent_per_day
      t.integer :rent_per_hour
      t.integer :rent_per_person
      t.boolean :published
      t.string :contact_email
      t.string :contact_phone
      t.decimal :cleaning_fee
      t.string :slug
      t.integer :sales_guarantee
      t.integer :capacity_classroom
      t.integer :capacity_theater
      t.integer :capacity_banquet
      t.integer :capacity_conference
      t.integer :capacity_u_shape
      t.integer :capacity_standing
      t.integer :capacity_sitting
      t.integer :security_deposit
      t.integer :reservation_fee
      t.integer :conversations_count
      t.integer :floor_area
      t.integer :reviews_count
      t.decimal :reviews_average
      t.text :cancellation_policy
      t.text :pricing_details
      t.text :additional_service_category_description
      t.text :capacity_details
      t.string :address
      t.string :postcode
      t.string :city
      t.timestamps
    end
  end
end
