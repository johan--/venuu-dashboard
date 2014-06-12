require 'test_helper'

class EventTypesControllerTest < ActionController::TestCase
  setup do
    @event_type = event_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:event_types)
  end

  test "should create event_type" do
    assert_difference('EventType.count') do
      post :create, event_type: { name: @event_type.name }
    end

    assert_response 201
  end

  test "should show event_type" do
    get :show, id: @event_type
    assert_response :success
  end

  test "should update event_type" do
    put :update, id: @event_type, event_type: { name: @event_type.name }
    assert_response 204
  end

  test "should destroy event_type" do
    assert_difference('EventType.count', -1) do
      delete :destroy, id: @event_type
    end

    assert_response 204
  end
end
