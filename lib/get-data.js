'use strict'

const axios = require('axios')
const generateJwt = require('./generate-jwt')
const logger = require('./logger')

module.exports = url => {
  const token = generateJwt()
  axios.defaults.headers.common.Authorization = token
  return new Promise((resolve, reject) => {
    logger('info', ['get-data', 'url', url])
    axios.get(url)
      .then(result => {
        logger('info', ['get-data', 'url', url, 'success'])
        resolve(result.data)
      })
      .catch(error => {
        logger('error', ['get-data', 'url', url, error])
        const response = error.response.data
        const data = {
          statusKode: response.statusCode,
          error: response.error,
          message: response.message
        }
        resolve(data)
      })
  })
}
