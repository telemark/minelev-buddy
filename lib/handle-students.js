'use strict'

const config = require('../config')
const getData = require('./get-data')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'student') {
      const url = `${config.BUDDY_API}/users/${query.caller}/students/${query.id}`
      const data = await getData(url)
      resolve(data)
    } else if (query.action === 'search') {
      const url = `${config.BUDDY_API}/users/${query.caller}/search/${query.data.name}`
      const data = await getData(url)
      resolve(data)
    } else if (query.action === 'contactteachers') {
      const url = `${config.BUDDY_API}/users/${query.id}/contactTeachers`
      const data = await getData(url)
      resolve(data)
    } else {
      resolve(query)
    }
  })
}
