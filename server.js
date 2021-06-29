const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/luba'));

// To Proxy every URL starting with /api

const apiProxy = proxy('https://courierdemo.azurewebsites.net/api');

app.use('/api/*', apiProxy);

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/luba/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);