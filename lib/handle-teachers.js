'use strict'

const axios = require('axios')
const config = require('../config')
const generateJwt = require('./generate-jwt')

module.exports = query => {
  const token = generateJwt()
  axios.defaults.headers.common['Authorization'] = token
  return new Promise((resolve, reject) => {
    if (query.action === 'contactclasses') {
      const url = `${config.BUDDY_API}/users/${query.id}/contactClasses`
      axios.get(url)
        .then(result => resolve(result.data))
        .catch(error => reject(error))
    } else {
      resolve(query)
    }
  })
}
