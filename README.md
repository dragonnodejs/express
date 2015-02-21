# DragonNode.js Express
Bundle with services to develop applications with express
- Express initialization and app service
- Initialize basic http authentication for all http requests
- Enable CORS to allow all origins making requests to the application
- Set or remove http headers for all http requests
- Serves the static files with compression support

# Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-express": "^2.0.0"
    }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
var config = {
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED,
                    realm: process.env.AUTH_REALM,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD
                },
                cors: {},
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                static: {
                    directory: __dirname + '/web/'
                }
            }]
        ]
    }
};
```
