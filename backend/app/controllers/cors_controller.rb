class CorsController < ApplicationController

  def options
    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PATCH, PUT, DELETE'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
    render :text => '', :content_type => 'text/plain'
  end

end
