class EventTypesController < ApplicationController
  # GET /event_types
  # GET /event_types.json
  def index
    @event_types = EventType.all

    render json: @event_types
  end

  # GET /event_types/1
  # GET /event_types/1.json
  def show
    @event_type = EventType.find(params[:id])

    render json: @event_type
  end

  # POST /event_types
  # POST /event_types.json
  def create
    @event_type = EventType.new(params[:event_type])

    if @event_type.save
      render json: @event_type, status: :created, location: @event_type
    else
      render json: @event_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_types/1
  # PATCH/PUT /event_types/1.json
  def update
    @event_type = EventType.find(params[:id])

    if @event_type.update(params[:event_type])
      head :no_content
    else
      render json: @event_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_types/1
  # DELETE /event_types/1.json
  def destroy
    @event_type = EventType.find(params[:id])
    @event_type.destroy

    head :no_content
  end
end
