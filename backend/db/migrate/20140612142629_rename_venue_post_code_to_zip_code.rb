class RenameVenuePostCodeToZipCode < ActiveRecord::Migration
  def change
    rename_column :venues, :postcode, :zipcode
  end
end
