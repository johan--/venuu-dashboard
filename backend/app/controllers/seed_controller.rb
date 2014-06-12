require 'database_cleaner'

class SeedController < ApplicationController
  def reset
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean
    load File.join(Rails.root, 'db', 'seeds.rb')
  end
end
