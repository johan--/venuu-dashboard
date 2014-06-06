#!/bin/bash
# This server side script prepares and deploys the API

readonly PRODUCTION_DIR=/srv/ohtu-backend

rails-stop () {

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

rails-restart () {
  rails-stop
  export RAILS_ENV=production
  rails s -d
}

production-setup-commands () {
  cd /srv/ohtu-backend/
  bundle install
  export RAILS_ENV=production
  rake db:drop db:migrate db:seed
}

cd-API () {
  production-setup-commands
  rails-restart
}

cd-API

