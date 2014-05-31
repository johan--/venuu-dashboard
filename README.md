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

Add following line to sudoers so www-data can run continuous delivery with sudo without password (but nothing else)
```
visudo
www-data ALL =(ohtu) NOPASSWD: /srv/hook/continuous_delivery.sh
```

Create user 'ohtu' (or change to your liking)

Then run following commands as root ( or sudo ) to install all necessary software - should run fine as a script on Ubuntu 12.04

```
#Basic server configuration

apt-get update
apt-get -y upgrade
apt-get install -y nginx
apt-get install -y git

#Install Node.js

apt-get install -y python-software-properties
apt-get install -y software-properties-common
add-apt-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install python g++ make nodejs

#For Ruby
apt-get install -y libssl-dev

#php5-fpm, for continuous development script served by nginx

apt-get install -y php5-common php5-cli php5-fpm
  
#setup directories
  
mkdir /srv/hook/
mkdir /srv/ohtu/
chown ohtu /srv/hook/
chown ohtu /srv/ohtu/

#setup nginx
mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.copy
wget https://raw.githubusercontent.com/venuu/venuu-dashboard/master/continuous_deployment/nginx_settings -O default

service php5-fpm stop
service nginx stop
service php5-fpm start
service nginx start
```

And the following commands with user 'ohtu'

```
#Install Ruby

git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 2.1.1
rbenv global 2.1.1
gem install bundler


#Set up repo and CD

git clone https://github.com/venuu/venuu-dashboard.git /srv/hook/venuu-dashboard/
cd /srv/hook/venuu-dashboard/
bundle install
source ~/.bashrc
source ~/.bash_profile
npm install -g grunt-cli bower

#Set up production manually (optional, index.php is already listening for webhooks)
/srv/hook/continuous_delivery.sh

```






