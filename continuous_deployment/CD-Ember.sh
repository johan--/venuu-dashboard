#!/bin/bash
# Rsync grunt build /dist contents to production

readonly PRODUCTION=ohtu@ohtu.venuu.fi:/srv/ohtu/
readonly PROJECT_DIR=~/venuu-dashboard

sync-files ()
{
  grunt build
  rsync \
      --verbose \
      --recursive \
      $PROJECT_DIR/dist/* \
      $PRODUCTION
}

main ()
{
  echo "Begin Ember CD"
  sync-files
  echo "Ember build $CIRCLE_BUILD_NUM deployed"
}

main
