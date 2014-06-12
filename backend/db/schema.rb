# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140612142629) do

  create_table "event_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events_of_venues", force: true do |t|
    t.integer "venue_id"
    t.integer "event_type_id"
  end

  create_table "types_of_venues", force: true do |t|
    t.integer  "venue_id"
    t.integer  "venue_type_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venue_groups", force: true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "zipcode"
    t.string   "city"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venue_service_categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venue_services", force: true do |t|
    t.string   "name"
    t.string   "negation"
    t.integer  "venue_service_category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venue_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venues", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.text     "pitch"
    t.integer  "rent_per_day"
    t.integer  "rent_per_hour"
    t.integer  "rent_per_person"
    t.boolean  "published"
    t.string   "contact_email"
    t.string   "contact_phone"
    t.decimal  "cleaning_fee"
    t.string   "slug"
    t.integer  "sales_guarantee"
    t.integer  "capacity_classroom"
    t.integer  "capacity_theater"
    t.integer  "capacity_banquet"
    t.integer  "capacity_conference"
    t.integer  "capacity_u_shape"
    t.integer  "capacity_standing"
    t.integer  "capacity_sitting"
    t.integer  "security_deposit"
    t.integer  "reservation_fee"
    t.integer  "conversations_count"
    t.integer  "floor_area"
    t.integer  "reviews_count"
    t.decimal  "reviews_average"
    t.text     "cancellation_policy"
    t.text     "pricing_details"
    t.text     "additional_service_category_description"
    t.text     "capacity_details"
    t.string   "address"
    t.string   "zipcode"
    t.string   "city"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "venue_group_id"
  end

  create_table "venues_services_available", force: true do |t|
    t.integer "venue_id"
    t.integer "venue_service_id"
  end

end
