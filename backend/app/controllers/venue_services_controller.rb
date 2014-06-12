class VenueServicesController < ApplicationController

  def index
    if params[:ids]
      @venue_services = VenueService.where(id: params[:ids])
    else
      @venue_services= VenueService.all
    end
    render json: @venue_services
  end

end
