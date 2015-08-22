//this file let's us know the environment we are running

var environment = require('./env.json');

exports.config = function(){
	var node_env = process.env.NODE_ENV || 'development'; // will default to development if process.env.NODE_ENV not working

	return environment[node_env]
}

// you can set this in your command line "heroku config:set NODE_ENV=production"