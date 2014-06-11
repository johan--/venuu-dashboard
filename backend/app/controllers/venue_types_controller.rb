class VenueTypesController < ApplicationController

  def index
    if params[:ids]
      @venue_types = VenueType.where(id: params[:ids])
    else
      @venue_types = VenueType.all
    end
    render json: @venue_types
  end

end
