'use strict';

/**
 * Express initialization and app service
 * @example
    ['modules/app', { port: process.env.PORT }]
 */

module.exports = (config, libraries, services) => {
    let express = libraries.express;

    let app = express();
    app.listen(config.port);

    services.app = app;
};
