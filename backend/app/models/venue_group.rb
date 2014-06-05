class VenueGroup < ActiveRecord::Base
  has_many :venues

  def self.publicAttributes
    return :name, :address, :zipcode, :city
  end
end
