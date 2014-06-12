class VenuesController < ApplicationController

  # GET /venues
  # GET /venues.json
  def index
    if params[:ids]
      @venues = Venue.where(id: params[:ids])
    else
      @venues = Venue.all
    end
    render json: @venues
  end

  # GET /venues/1
  # GET /venues/1.json
  def show
    @venue = Venue.find(params[:id])

    render json: @venue
  end

  # POST /venues
  # POST /venues.json
  def create
    @venue = Venue.new(venue_params)

    if @venue.save
      render json: @venue, status: :created, location: @venue
    else
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /venues/1
  # PATCH/PUT /venues/1.json
  def update
    @venue = Venue.find(params[:id])
    puts params

    # replace venue_type_ids coming from ember with VenueType.find(id)
    # so Rails handles the many to many relationship correctly
    if params[:venue][:venue_type_ids]
      @venue.venue_types = params[:venue][:venue_type_ids].map { |id| VenueType.find(id) }
    else
      @venue.venue_types = []
    end

    # replace event_type_ids coming from ember with EventType.find(id)
    # so Rails handles the many to many relationship correctly
    if params[:venue][:event_type_ids]
      @venue.event_types = params[:venue][:event_type_ids].map { |id| EventType.find(id) }
    else
      @venue.event_types = []
    end

    @venue.save

    if @venue.update(venue_params)
      head :no_content
    else
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /venues/1
  # DELETE /venues/1.json
  def destroy
    @venue = Venue.find(params[:id])
    @venue.destroy

    head :no_content
  end

  private

  def venue_params
    params.require(:venue).permit(*Venue.publicAttributes)
  end

end
