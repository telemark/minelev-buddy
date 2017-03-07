[![Build Status](https://travis-ci.org/telemark/minelev-buddy.svg?branch=master)](https://travis-ci.org/telemark/minelev-buddy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/minelev-buddy.svg)](https://greenkeeper.io/)

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

### ```GET /classes/{id}/students```

Get all students in a class

## License

[MIT](LICENSE)

![Robohash image of minelev-buddy](https://robots.kebabstudios.party/minelev-buddy.png "Robohash image of minelev-buddy")
