# DragonNode.js Express
Bundle with services to develop applications with express
- Express initialization and app service
- Initialize basic http authentication for all http requests
- Set or remove http headers for all http requests
- Provide the language data with the determined language in the views
- Make package information for the application available in views
- Serves the static files with compression support
- Swig express integration to bind ".twig" views to the swig renderer

## Installation
- Run ```npm install dragonnodejs-express --save```
- Add the bundle to the "app.js":
```javascript
let modules = [
    [require('dragonnodejs-express'), [
        ['app', { listen: [process.env.PORT] }],
        ['auth', {
            disabled: process.env.AUTH_DISABLED,
            users: process.env.AUTH_USERS,
            user: process.env.AUTH_USER,
            password: process.env.AUTH_PASSWORD,
            realm: process.env.AUTH_REALM
        }],
        ['header', [
            ['X-Content-Type-Options', 'nosniff'],
            ['X-Download-Options', 'noopen'],
            ['X-Frame-Options', 'DENY'],
            ['X-Powered-By', null],
            ['X-UA-Compatible', 'IE=edge,chrome=1'],
            ['X-XSS-Protection', '1; mode=block']
        ]],
        ['language', {
            default: 'en',
            directory: __dirname + '/languages/',
            languages: ['de', 'en']
        }],
        ['package', require(__dirname + '/package.json')],
        ['static', { directory: __dirname + '/web/' }],
        ['swig', { directory: __dirname + '/views/' }]
    ]]
];
```

## Production
- Set environment variable "NODE_ENV" to "production" to enable express internal optimizations
