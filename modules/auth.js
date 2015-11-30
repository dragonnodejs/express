'use strict';

/**
 * Initialize basic http authentication for all http requests
 * @example
    ['auth', {
        disabled: process.env.AUTH_DISABLED,
        users: process.env.AUTH_USERS,
        user: process.env.AUTH_USER,
        password: process.env.AUTH_PASSWORD,
        realm: process.env.AUTH_REALM
    }]
 */

module.exports = (config, libraries, services) => {
    let app = services.app,
        httpAuth = libraries.httpAuth;

    // Check first if the auth is disabled

    if (config.disabled) {
        return;
    }

    // Use the users as json encoded string or object and the single user password

    let users = {};
    if (config.users) {
        if (typeof config.users == 'string') {
            users = JSON.parse(config.users);
        } else {
            users = config.users;
        }
    }
    if (config.user && config.password) {
        users[config.user] = config.password;
    }

    // Check if there is at least one defined user

    if (!Object.keys(users).length) {
        return;
    }

    // Add the middleware for the basic http authentication

    let basic = httpAuth.basic(
        { realm: config.realm },
        (user, password, callback) => {
            callback(users[user] && users[user] == password);
        }
    );
    app.use(httpAuth.connect(basic));
};
