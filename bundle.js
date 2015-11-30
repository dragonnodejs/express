'use strict';

// Load the libraries and run the modules for the bundle

module.exports = (config, _, services) => {
    let directory = __dirname + '/modules/';
    let libraries = {
        acceptLanguage: require('accept-language'),
        compression: require('compression'),
        express: require('express'),
        fs: require('fs'),
        httpAuth: require('http-auth'),
        swig: require('swig')
    };
    require('dragonnodejs')(directory, config, libraries, services);
};
