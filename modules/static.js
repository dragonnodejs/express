'use strict';

/**
 * Serves the static files with compression support
 * @example
    static: {
        directory: __dirname + '/web'
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        compression = libraries.compression,
        express = libraries.express;

    app.use(compression());
    app.use(express.static(config.directory));
};
