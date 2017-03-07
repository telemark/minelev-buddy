'use strict'

const axios = require('axios')
const config = require('../config')
const generateJwt = require('./generate-jwt')

module.exports = query => {
  const token = generateJwt()
  axios.defaults.headers.common['Authorization'] = token

  return new Promise((resolve, reject) => {
    if (query.action === 'students') {
      const url = `${config.BUDDY_API}/groups/${query.id}/students`
      axios.get(url)
        .then(result => resolve(result.data))
        .catch(error => reject(error))
    } else {
      resolve(query)
    }
  })
}
