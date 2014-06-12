class VenueServiceCategoriesController < ApplicationController

  def index
    if params[:ids]
      @venue_service_categories = VenueServiceCategory.where(id: params[:ids])
    else
      @venue_service_categories = VenueServiceCategory.all
    end
    render json: @venue_service_categories
  end

end
