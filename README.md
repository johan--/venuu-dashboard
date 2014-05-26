# Venuu-dashboard [![Build Status](https://circleci.com/gh/venuu/venuu-dashboard.png?circle-token=c78cb6dacd86ddba01a411456ea2ab0bef6ce414)](https://circleci.com/gh/venuu/venuu-dashboard)

## Getting started
  * `git clone git@github.com:venuu/venuu-dashboard.git`
  * `npm install`
  * `npm install -g grunt-cli bower `
  * `bower install`
  * `grunt serve`

## Production setup

Add following line to sudoers so www-data can run continuous delivery with sudo without password (but nothing else)
```
visudo
www-data ALL=(ALL) NOPASSWD: /srv/hook/continuous_delivery.sh
```

Then run following script to install all necessary software

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

#Install Ruby

git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
apt-get install -y libssl-dev
rbenv install 2.1.1
rbenv global 2.1.1

#Setup continuous development:

  #php5-fpm, for continuous development script served by nginx
  apt-get install -y php5-common php5-cli php5-fpm
  
  #setup script
  mkdir /srv/hook/
  mkdir /srv/ohtu/
  git clone https://github.com/venuu/venuu-dashboard.git /srv/hook/venuu-dashboard/
  cp /srv/hook/venuu-dashboard/continuous_deployment/index.php /srv/hook/
  cp /srv/hook/venuu-dashboard/continuous_deployment/continuous_delivery.sh /srv/hook/

  #setup nginx
  mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.copy
  cp /srv/hook/venuu-dashboard/continuous_deployment/nginx_settings /etc/nginx/sites-available/default
  service nginx stop
  
  
  #run continuous_delivery.sh
  gem update --system
  gem install compass
  source ~/.bashrc
  source ~/.bash_profile
  npm install -g grunt-cli bower
  /srv/hook/continuous_delivery.sh
  
  service php5-fpm start
  service nginx start
```



Detailed configuration can be found on [Google Drive](https://docs.google.com/document/d/1ptHqRnnKQh2z2oObZt5Df3rILxeJ84YM_uBMEtYwNeU).


