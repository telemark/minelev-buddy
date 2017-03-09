'use strict'

const config = require('../config')
const getData = require('./get-data')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'students') {
      const url = `${config.BUDDY_API}/groups/${query.id}/students`
      const data = await getData(url)
      resolve(data)
    } else {
      resolve(query)
    }
  })
}
