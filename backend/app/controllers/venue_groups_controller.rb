class VenueGroupsController < ApplicationController
  # GET /venue_groups
  # GET /venue_groups.json
  def index
    @venue_groups = VenueGroup.all

    render json: @venue_groups
  end

  # GET /venue_groups/1
  # GET /venue_groups/1.json
  def show
    @venue_group = VenueGroup.find(params[:id])

    render json: @venue_group
  end

  # POST /venue_groups
  # POST /venue_groups.json
  def create
    @venue_group = VenueGroup.new(params[:venue_group])

    if @venue_group.save
      render json: @venue_group, status: :created, location: @venue_group
    else
      render json: @venue_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /venue_groups/1
  # PATCH/PUT /venue_groups/1.json
  def update
    @venue_group = VenueGroup.find(params[:id])

    if @venue_group.update(params[:venue_group])
      head :no_content
    else
      render json: @venue_group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /venue_groups/1
  # DELETE /venue_groups/1.json
  def destroy
    @venue_group = VenueGroup.find(params[:id])
    @venue_group.destroy

    head :no_content
  end
end
