#!/bin/bash
# Sync production API files and prepare/deploy the API
# This script runs the prepare_API script at the production server over SSH


readonly PROJECT_DIR=~/venuu-dashboard
readonly PREPARATION_SCRIPT=$PROJECT_DIR/continuous_deployment/prepare_API.sh
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

