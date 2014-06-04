class VenuesController < ApplicationController

  # GET /venues
  # GET /venues.json
  def index
    @venues = Venue.all

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
    params.require(:venue).permit(:additional_service_category_description,
    :cancellation_policy,
    :capacity_banquet,
    :capacity_classroom,
    :capacity_conference,
    :capacity_details,
    :capacity_sitting,
    :capacity_standing,
    :capacity_theater,
    :capacity_u_shape,
    :cleaning_fee,
    :contact_email,
    :contact_phone,
    :conversations_count,
    :description,
    :floor_area,
    :pitch,
    :pricing_details,
    :published,
    :rent_per_day,
    :rent_per_hour,
    :rent_per_person,
    :reservation_fee,
    :reviews_average,
    :reviews_count,
    :sales_guarantee,
    :security_deposit,
    :slug,
    :title,
    :venue_group_id,
    :updated_at,
    :created_at)
  end

end
