#!/bin/bash
# Project setup script. Checks dependencies and runs necessary commands.

readonly dependencies=( ruby node npm grunt bower)
readonly installation_guides=( \
					'Ruby; https://github.com/sstephenson/rbenv#installation' \
					'Node.js; http://nodejs.org/download/' \
					'npm; http://nodejs.org/download/' \
					'grunt: sudo npm install -g grunt-cli' \
					'bower: sudo npm install -g bower')


function check_global_dependencies () {
	echo "Checking dependencies:"

	#Status 0 => OK. Set to -1 if any dependency is missing.
	status=0

	#Loop through dependencies and test their existence
	for (( i=0; i<${#dependencies[@]}; i++ )); do
		if hash ${dependencies[$i]} 2>/dev/null; then
			echo "${dependencies[$i]} OK"
		else
			echo "${dependencies[$i]} NOT FOUND!"
			echo "Please install ${installation_guides[$i]}"
			status=-1
		fi
	done
}

function setup_commands () {
	npm install
	bundle install
	bower install
	cd ./backend
	bundle install
	rake db:drop db:migrate db:seed
}

function main () {
	check_global_dependencies

	if [ $status == 0 ]; then
		setup_commands
		echo 'Setup is now complete.'
		echo 'Use "grunt serve:test" or "grunt test" to run the tests'
	fi
}

main


