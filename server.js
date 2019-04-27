// @ts-check
var util = require('./util');
const express = require('express');
const http = require('http');
const url = require('url'); 
var cookieParser = require('cookie-parser');
const request = require('request');

async function main() {
  // Azure App Service will set process.env.port for you, but we use 3000 in development.
  const PORT = process.env.PORT || 3001;
  // Create the express routes
  let app = express();
  app.use(express.static('public'));
  app.use(cookieParser());

  app.get('/test',  (req, res) => {       
      res.send('Hello World')   
  });

// Create the HTTP server.
  let server = http.createServer(app);
  server.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });
}

main();
