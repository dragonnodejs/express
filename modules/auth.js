"use strict";
/*global module:false */

/*
 * Initialize basic http authentication for all http requests
 * @example
    auth: {
        disabled: process.env.AUTH_DISABLED,
        realm: process.env.AUTH_REALM,
        user: process.env.AUTH_USER,
        password: process.env.AUTH_PASSWORD
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        httpAuth = libraries.httpAuth;

    if (!config.disabled && config.user && config.password) {
        var basic = httpAuth.basic(
            {
                realm: config.realm || ''
            },
            function (user, password, callback) {
                callback(user == config.user && password == config.password);
            }
        );
        app.use(httpAuth.connect(basic));
    }
};
