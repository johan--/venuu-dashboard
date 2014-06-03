#!/bin/bash

# Sync production API files and run necessary preparation commands


readonly PROJECT_DIR=~/venuu-dashboard
readonly PREPARATION_SCRIPT=$PROJECT_DIR/prepare_API.sh
readonly PRODUCTION_DIR=/srv/ohtu-backend
readonly PRODUCTION=ohtu@ohtu.venuu.fi:$PRODUCTION_DIR

sync_files () {
  rsync \
      --verbose \
      --recursive \
      $PROJECT_DIR/backend/* \
      $PRODUCTION
}

prepare_API () {
  ssh \
    ohtu@ohtu.venuu.fi \
    'bash -i' < $PREPARATION_SCRIPT
}

main () {
  echo "Begin API CD"
  sync_files
  prepare_API
  echo "API build $CIRCLE_BUILD_NUM deployed"
}

main

