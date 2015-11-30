'use strict';

/**
 * Make package information for the application available in views
 * @example
    ['package', require(__dirname + '/package.json')]
 */

module.exports = (config, libraries, services) => {
    let app = services.app;
    app.locals.package = { name: config.name, version: config.version, homepage: config.homepage };
};
