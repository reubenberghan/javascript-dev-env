// This file isn't transpiled, so must use CommonJS and features available in node version

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = () => {};

// configure JSDOM and set global variables to simulate browser env for tests
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();

const exposedProperties = [ 'window', 'document' ];

global.document = window.document;
global.window = window;

Object.keys(document.defaultView)
  .map(property => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js'
  };
