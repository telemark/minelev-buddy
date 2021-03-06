[![Build Status](https://travis-ci.org/telemark/minelev-buddy.svg?branch=master)](https://travis-ci.org/telemark/minelev-buddy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# minelev-buddy

Buddy service for MinElev

## API

All API calls needs an Authorization header with valid jwt  

### ```GET /students?name={name}```

Search all your students

### ```GET /students/{id}```

Get a specific student

### ```GET /students/{id}/contactteachers```

Get all contact teacher for a given student

### ```GET /teachers/{id}/contactclasses```

Get all contact classes for a given teacher

### ```GET /teachers/all```

Get all teachers

### ```GET /classes/{id}/students```

Get all students in a class

## Development

Add a local `.env`

```
NODE_ENV=development
BUDDY_API=api-for-buddy-ws
JWT_SECRET=jwt-secret
PAPERTRAIL_HOSTNAME=minelev
PAPERTRAIL_HOST=tfk-papertrail-host
PAPERTRAIL_PORT=tfk-papertrail-port
```

Start the dev environment

```
$ now dev
```

## Deploy to ZEIT/Now

Configure [now.json](now.json)

Run the deployment script

```
$ npm run deploy
```

## Related

- [minelev-web](https://github.com/telemark/minelev-web) web frontend for MinElev
- [minelev-logs](https://github.com/telemark/minelev-logs) logs service for MinElev
- [minelev-notifications](https://github.com/telemark/minelev-notifications) notifications service for MinElev
- [minelev-leder](https://github.com/telemark/minelev-leder) web frontend for MinElev - school administration

## License

[MIT](LICENSE)

