'use strict'

const axios = require('axios')
const generateJwt = require('./generate-jwt')

module.exports = url => {
  const token = generateJwt()
  axios.defaults.headers.common['Authorization'] = token
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(result => resolve(result.data))
      .catch(error => {
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
