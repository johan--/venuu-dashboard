#!/bin/sh
#Moves grunt build dist to nginx web folder, run as sudo
#sudoers for user running this script: ALL=(ALL) NOPASSWD: /srv/hook/continuous_delivery.sh

cd /srv/hook/venuu-dashboard
npm install
bower -s --allow-root --config.interactive=false install
grunt build >> /srv/hook/gruntlog.txt
echo ---- GRUNT BUILD DONE AT: $(date) >> /srv/hook/gruntlog.txt
rm -rf /srv/ohtu/*
cp -r ./dist/* /srv/ohtu/
echo production updated: $(date) >> /srv/hook/hooklog.txt
