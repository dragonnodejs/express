'use strict';

/**
 * Swig express integration to bind ".twig" views to the swig renderer
 * @example
    ['swig', { directory: __dirname + '/views/' }]
 */

module.exports = (config, libraries, services) => {
    let app = services.app,
        swig = libraries.swig;

    if (app.get('env') == 'development') {
        swig.setDefaults({ cache: false });
    }
    app.engine('twig', swig.renderFile);
    app.set('views', config.directory);

    services.swig = swig;
};
