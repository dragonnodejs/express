'use strict';

/**
 * Set or remove http headers for all http requests
 * @example
    // RestAPI:
    ['modules/header', [
        ['Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'],
        ['ETag', null],
        ['Expires', '0'],
        ['Pragma', 'no-cache'],
        ['Surrogate-Control', 'no-store'],
        ['X-Powered-By', null]
    ]]

    // Webserver:
    ['modules/header', [
        ['X-Content-Type-Options', 'nosniff'],
        ['X-Download-Options', 'noopen'],
        ['X-Frame-Options', 'DENY'],
        ['X-Powered-By', null],
        ['X-UA-Compatible', 'IE=edge,chrome=1'],
        ['X-XSS-Protection', '1; mode=block']
    ]]
 */

module.exports = (config, libraries, services) => {
    let app = services.app;

    app.use((req, res, next) => {
        for (let header of config) {
            if (header[1]) {
                res.setHeader(header[0], header[1]);
            } else {
                res.removeHeader(header[0]);
            }
        }
        next();
    });
};
