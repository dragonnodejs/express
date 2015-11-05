# DragonNode.js Express
Bundle with services to develop applications with express
- Express initialization and app service
- Initialize basic http authentication for all http requests
- Set or remove http headers for all http requests

## Installation
- Add bundle to the "package.json":
```javascript
{
    "dependencies": {
        "dragonnodejs-express": "^3.0.0"
    }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
let config = {
    modules: [
        [require('dragonnodejs-express'), [
            ['modules/app', { port: process.env.PORT }],
            ['modules/auth', {
                disabled: process.env.AUTH_DISABLED,
                users: process.env.AUTH_USERS,
                user: process.env.AUTH_USER,
                password: process.env.AUTH_PASSWORD,
                realm: process.env.AUTH_REALM
            }],

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
        ]]
    ]
};
```

## Production
- Set environment variable "NODE_ENV" to "production" to enable express internal optimizations
