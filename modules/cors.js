"use strict";
/*global module:false */

/**
 * Enable CORS to allow all origins making requests to the application
 * @example
    cors: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        cors = libraries.cors;

    app.use(cors());
};
