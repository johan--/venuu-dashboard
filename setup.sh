#!/bin/bash
# Project setup script. Checks dependencies and runs necessary commands.

readonly dependencies=( ruby node npm grunt bower)
readonly installation_guides=( \
					'Ruby; https://github.com/sstephenson/rbenv#installation' \
					'Node.js; http://nodejs.org/download/' \
					'npm; http://nodejs.org/download/' \
					'grunt: sudo npm install -g grunt-cli' \
					'bower: sudo npm install -g bower')


check_global_dependencies () {
	echo "Checking dependencies:"
	
	#Status 0 => OK. Set to -1 if any dependency is missing.
	status=0
	
	#Loop through dependencies and test their existence
	for (( i=0; i<${#dependencies[@]}; i++ )); do	  
		eval which -s ${dependencies[$i]}
		ret_code=$?

		if [ $ret_code != 0 ]; then
			echo "${dependencies[$i]} NOT FOUND!"
			echo "Please install ${installation_guides[$i]}"
			status=-1
		else
			echo "${dependencies[$i]} OK"
		fi
	done	
}

setup_commands () {
	npm install
	bundle install
	bower install
	cd ./backend
	bundle install
	rake db:drop db:migrate db:seed
	cd ..
	grunt serve:test
}

main () {
	check_global_dependencies
	
	if [ $status == 0 ]; then
		setup_commands		
	fi	
}

main


