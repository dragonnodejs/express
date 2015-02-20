"use strict";
/*global module:false */

/*
 * Set or remove http headers for all http requests
 * @example
    header: {
        'X-UA-Compatible': 'IE=edge,chrome=1',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'X-Powered-By': null
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        _ = libraries.underscore;

    app.use(function (req, res, next) {
        _.each(config, function (value, key) {
            if (value) {
                res.setHeader(key, value);
            } else {
                res.removeHeader(key);
            }
        });
        next();
    });
};
