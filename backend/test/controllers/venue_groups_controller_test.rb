require 'test_helper'

class VenueGroupsControllerTest < ActionController::TestCase
  setup do
    @venue_group = venue_groups(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:venue_groups)
  end

  test "should create venue_group" do
    assert_difference('VenueGroup.count') do
      post :create, venue_group: { address: @venue_group.address, city: @venue_group.city, name: @venue_group.name, zipcode: @venue_group.zipcode }
    end

    assert_response 201
  end

  test "should show venue_group" do
    get :show, id: @venue_group
    assert_response :success
  end

  test "should update venue_group" do
    put :update, id: @venue_group, venue_group: { address: @venue_group.address, city: @venue_group.city, name: @venue_group.name, zipcode: @venue_group.zipcode }
    assert_response 204
  end

  test "should destroy venue_group" do
    assert_difference('VenueGroup.count', -1) do
      delete :destroy, id: @venue_group
    end

    assert_response 204
  end
end
