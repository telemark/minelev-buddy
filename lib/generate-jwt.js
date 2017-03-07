'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = () => {
  const payload = {
    name: 'minelev-buddy',
    description: 'system call'
  }

  const options = {
    expiresIn: '1m',
    issuer: 'https://auth.t-fk.no'
  }

  return jwt.sign(payload, config.JWT_SECRET, options)
}
