'use strict';

/**
 * Express initialization and app service
 * @example
    ['app', { listen: [process.env.PORT] }]
 */

module.exports = (config, libraries, services) => {
    let express = libraries.express;

    let app = express();
    app.listen.apply(app, config.listen);

    services.app = app;
};
