/*eslint-env node*/


// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve static files out of ./public
app.use(express.static(__dirname + '/public'));

// serve the initial view
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/src/views/index.html');
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});