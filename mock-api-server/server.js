#!/bin/env node
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const DevJsonServer = function DevJsonServer() {
  // Scope.
  const self = this;

  // Set up server IP address and port # using env constiables/defaults.
  self.setupVariables = () => {
    self.port = 8080;
    self.ipaddress = '127.0.0.1';
  };

  /**
   *  Initialize the server (express) and create the routes and register
   *  the handlers.
   */
  self.initializeServer = () => {
    // set up our express application
    self.app = express();
    self.app.use(cookieParser()); // read cookies (needed for auth)
    self.app.use(bodyParser.json()); // get information from html forms
    self.app.use(bodyParser.urlencoded({ extended: true }));
    self.app.use(cors({ origin: true, credentials: true }));
    self.app.use('/', routes);
  };

  // Initializes the application.
  self.initialize = () => {
    self.setupVariables();
    self.initializeServer();
  };

  self.start = () => {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, self.ipaddress, () => {
      console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
    });
  };
};

const p = new DevJsonServer();
p.initialize();
p.start();
