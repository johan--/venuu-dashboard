#!/bin/bash

rails-stop ()
{
  kill -9 `cat tmp/pids/server.pid`
}

rails-restart ()
{
  rails-stop
  rails s -d
}

cd /srv/ohtu-backend/
bundle install
rails-restart
