require 'database_cleaner'

class SeedController < ApplicationController
  def reset
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean
    load File.join(Rails.root, 'db', 'test_seeds.rb')
  end
end
