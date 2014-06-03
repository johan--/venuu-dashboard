#!/bin/bash

# run bundle install, rake db:migrate and restart rails server
readonly PRODUCTION_DIR=/srv/ohtu-backend

rails-stop ()
{
  # Running rails daemon pid is always at project/tmp/pids/server.pid
  local rails=$PRODUCTION_DIR/tmp/pids/server.pid

  if [ -f $rails ];
    then
      echo 'Killing existing rails server'
      kill -9 `cat $rails`
    else
      echo 'No rails server found'
  fi
}

rails-restart ()
{
  rails-stop
  rails s -d
}

cd-API ()
{
  echo 'Begin API CD'
  cd /srv/ohtu-backend/
  bundle install
  rake db:migrate
  rails-restart
}

cd-API

