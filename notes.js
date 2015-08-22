

// here is where we require http
var http = require('http');

// this is where we call on http and call our create server method and give a call back
// on the call back we get a request and response 
// finally with .listen we tell our server which port to listen on (choose a number you like)
http.createServer(function(request, response){
	response.end('Hello World!');
}).listen(7000)

// if our server crashes any time before this then this message will not show up

console.log('Server is running on port 7000');



// SIDE NOTES. . . package.json file NEEDS a name and version

// npm install --save express  <<< This command will install express and add it to our folders package.json file as a "dependency"

// goes from THIS

// {
//   "name": "article-app",
//   "version": "0.0.1"
// }

// to THIS

// {
//   "name": "article-app",
//   "version": "0.0.1",
//   "dependencies": {
//     "express": "^4.13.3"
//   }
// }

// npm i --save mongoose <<< This installs mongoose

//REST - Representational State Transfer
// HTTP in its simplest form of request and response
//API - The backend interface that we are going to use to communicate with our APP. It's our "gateway" into our app

// npm i --save body-parser
// this will allow us to parse our information into the server