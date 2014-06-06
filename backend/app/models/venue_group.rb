class VenueGroup < ActiveRecord::Base
  has_many :venues

  def self.publicAttributes
    [:name, :address, :zipcode, :city]
  end
end
