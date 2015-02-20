"use strict";
/*global module:false */

/*
 * Initialize basic http authentication for all http requests
 * @example
    auth: {
        disabled: process.env.AUTH_DISABLED || !(process.env.AUTH_USER && process.env.AUTH_PASSWORD),
        realm: process.env.AUTH_REALM,
        users: function () {
            var users = {};
            users[process.env.AUTH_USER] = process.env.AUTH_PASSWORD;
            return users;
        }()
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        httpAuth = libraries.httpAuth;

    if (!config.disabled) {
        var basic = httpAuth.basic(
            {
                realm: config.realm || ''
            },
            function (user, password, callback) {
                callback(config.users[user] && config.users[user] == password);
            }
        );
        app.use(httpAuth.connect(basic));
    }
};
