# javascript-dev-env
[![Build Status](https://travis-ci.org/reubenberghan/javascript-dev-env.svg?branch=master)](https://travis-ci.org/reubenberghan/javascript-js-dev-env)

The aim of this repo is to provide a starter kit for the development of front-end JavaScript applications. This starter kit uses the React library for the front-end application.

It provides the necessary packages, files and scripts to:
- transpile app, test and build pipeline JavaScript using Babel 
- lint app and build JavaScript files using ESLint
- test app "*.test.js" files using Mocha with Chai
- build and serve the application from memory while in development using Webpack, webpack-dev-middleware and Express
- generate mock api data and serve this for the app in a development environment using json-schema-faker and json-server
- share the app from development using localtunnel
- build the app for production including minification, bundle splitting and hashing filenames for cache busting using Webpack and plugins

## TODO
### General
- [ ] elaborate on the features available with the version of Babel using
- [ ] add links to the referenced packages

### Project
- [x] add distServer.js and postbuild script to serve the built application locally for final sanity
- [x] add deploy script using Surge to deploy the static front-end
- [ ] add support for Sass compiling
- [x] add support for React and jsx
- [ ] update demo app to use React example
