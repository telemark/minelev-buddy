'use strict'

const axios = require('axios')
const jwt = require('jsonwebtoken')
const config = require('./config')

const payload = {
  name: 'minelev-buddy-example',
  description: 'test',
  caller: 'zrrrzzt'
}

const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}

const token = jwt.sign(payload, config.JWT_SECRET, options)

axios.defaults.headers.common.Authorization = token

const url = 'http://localhost:3000/students?name=maccyber'

axios.get(url)
  .then(result => console.log(result.data))
  .catch(error => console.error(error))
