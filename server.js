// find @ https://github.com/asaldivar/reddit-app


var express = require('express'); //express module
var app = express(); // defining our app as an instance of express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./app/config/config')
var environmentSettings = config.config();

mongoose.connect(environmentSettings.db);

// .use can help you check to see if the server was used (in basic example)
// app.use(function(){
// 	console.log('hey somebody used this server')
// 	next(); // will help move on to the next thing
// })

// we need to config use for our middleware for the rest of our app to use to handle the request.body we send
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json()) //to use only json

var apiRouter = require('./app/config/routes'); //route will only deal with API
app.use('api', apiRouter); //telling our app to use api router and only with http://appname/ api /articles in the browser


app.listen(7000);
console.log('Server is running on port 7000');