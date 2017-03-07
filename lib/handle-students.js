'use strict'

const axios = require('axios')
const config = require('../config')
const generateJwt = require('./generate-jwt')

module.exports = query => {
  const token = generateJwt()
  axios.defaults.headers.common['Authorization'] = token
  return new Promise((resolve, reject) => {
    if (query.action === 'student') {
      const url = `${config.BUDDY_API}/users/${query.caller}/students/${query.id}`
      axios.get(url)
        .then(result => resolve(result.data))
        .catch(error => reject(error))
    } else if (query.action === 'search') {
      const url = `${config.BUDDY_API}/users/${query.caller}/search/${query.data.name}`
      axios.get(url)
        .then(result => resolve(result.data))
        .catch(error => reject(error))
    } else if (query.action === 'contactteachers') {
      const url = `${config.BUDDY_API}/users/${query.id}/contactTeachers`
      axios.get(url)
        .then(result => resolve(result.data))
        .catch(error => reject(error))
    } else {
      resolve(query)
    }
  })
}
