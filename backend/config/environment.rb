# Load the Rails application.
require File.expand_path('../application', __FILE__)
require 'database_cleaner'

# Initialize the Rails application.
Rails.application.initialize!

DatabaseCleaner.strategy = :truncation

DatabaseCleaner.clean

load File.join(Rails.root, 'db', 'seeds.rb')
