'use strict';

// Bundle with services to develop applications with express

module.exports = (config, _, services) => {
    config = {
        libraries: {
            express: require('express'),
            httpAuth: require('http-auth')
        },
        directory: __dirname + '/',
        modules: config
    };
    require('dragonnodejs')(config, services);
};
