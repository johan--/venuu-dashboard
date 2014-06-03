# Venuu-dashboard [![Build Status](https://circleci.com/gh/venuu/venuu-dashboard.png?circle-token=c78cb6dacd86ddba01a411456ea2ab0bef6ce414)](https://circleci.com/gh/venuu/venuu-dashboard)

## Getting started

If you do not have ruby+bundler, node.js and npm, check Production Setup for instructions. If you source rbenv somewhere else than ~/.bashrc, please source that instead.

```
git clone git@github.com:venuu/venuu-dashboard.git
npm install
npm install -g grunt-cli bower 
bundle install
source ~/.bashrc
bower install
grunt serve
```

Detailed configuration can be found on [Google Drive](https://docs.google.com/document/d/1ptHqRnnKQh2z2oObZt5Df3rILxeJ84YM_uBMEtYwNeU).

## Production setup

Create user 'ohtu' (or change to your liking)

Then run following commands as root ( or sudo ) to install all necessary software - should run fine as a script on Ubuntu 12.04

```
#Basic server configuration

apt-get update
apt-get -y upgrade
apt-get install -y nginx
apt-get install -y git



#Ruby and Rails-api need these

apt-get install -y libssl-dev
apt-get install libsqlite3-dev

#setup directories
  
mkdir /srv/ohtu/
chown ohtu /srv/ohtu/
mkdir /srv/ohtu-backend/
chown ohtu /srv/ohtu-backend/

#setup nginx
mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.copy
wget https://raw.githubusercontent.com/venuu/venuu-dashboard/master/continuous_deployment/nginx_settings -O default

service nginx restart
```

And the following commands with user 'ohtu'

```
#Install Ruby

git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 2.0.0-rc2
rbenv global 2.0.0-rc2
gem install bundler


```






