'use strict'

const config = require('../config')
const getData = require('./get-data')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'contactclasses') {
      const url = `${config.BUDDY_API}/users/${query.id}/contactClasses`
      const data = await getData(url)
      resolve(data)
    } else {
      resolve(query)
    }
  })
}
