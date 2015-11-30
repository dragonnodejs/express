'use strict';

/**
 * Provide the language data with the determined language in the views
 * @example
    ['language', {
        default: 'en',
        directory: __dirname + '/languages/',
        languages: ['de', 'en']
    }]
 */

module.exports = (config, libraries, services) => {
    let acceptLanguage = libraries.acceptLanguage,
        app = services.app;

    let data = {};
    let load = language => {
        let path = config.directory + language + '.json';
        delete require.cache[require.resolve(path)];
        data[language] = require(path);
    };
    for (let language of config.languages) {
        load(language);
    }
    let language = language => (req, res, next) => {
        language = language || req.headers['X-Facebook-Locale'];
        if (language && !data[language]) {
            language = undefined;
        }
        if (!language) {
            let accepts = acceptLanguage.parse(req.headers['accept-language']);
            for (let accept of accepts) {
                if (language) {
                    return;
                }
                if (data[accept.language]) {
                    language = accept.language;
                }
            }
        }
        if (!language) {
            language = config.default;
        }
        if (app.get('env') == 'development') {
            load(language);
        }
        res.locals.language = data[language];
        next();
    };

    services.language = language;
};
