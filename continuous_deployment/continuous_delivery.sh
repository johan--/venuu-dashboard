#!/bin/bash -i
echo Starting ultimate CD $(date)

grunt build
rsync --verbose --recursive ../dist/* ohtu@ohtu.venuu.fi:/srv/ohtu/

echo Build $CIRCLE_BUILD_NUM deployed at $(date)
