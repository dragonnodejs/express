"use strict";
/*global module:false */
/*global __dirname:false */

// Bundle with services to develop applications with express

module.exports = function (config, _, services) {
    config = {
        libraries: {
            compression: require('compression'),
            cors: require('cors'),
            express: require('express'),
            httpAuth: require('http-auth'),
            underscore: require('underscore')
        },
        directory: __dirname + '/modules/',
        modules: {
            directory: config
        }
    };
    require('dragonnodejs')(config, services);
};
