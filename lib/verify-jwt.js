'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const logger = require('./logger')

module.exports = request => {
  return new Promise((resolve, reject) => {
    const bearerToken = request.headers.authorization
    if (bearerToken) {
      logger('info', ['verify-jwt', 'start'])
      const token = bearerToken.replace('Bearer ', '')
      jwt.verify(token, config.JWT_SECRET, (error, decoded) => {
        if (error) {
          logger('error', ['verify-jwt', 'invalid jwt', error])
          resolve({isValid: false, error: JSON.stringify(error)})
        } else {
          logger('info', ['verify-jwt', 'success', 'caller', decoded.caller])
          resolve({isValid: true, caller: decoded.caller})
        }
      })
    } else {
      logger('warn', ['verify-jwt', 'missing bearerToken'])
      resolve({isValid: false, caller: 'anonymous'})
    }
  })
}
