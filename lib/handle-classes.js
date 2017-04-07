'use strict'

const config = require('../config')
const getData = require('./get-data')
const logger = require('./logger')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'students') {
      logger('info', ['handle-classes', 'action', 'students', 'groupId', query.id])
      const url = `${config.BUDDY_API}/groups/${query.id}/students`
      const data = await getData(url)
      resolve(data)
    } else {
      logger('warn', ['handle-classes', 'action', 'unknown action', query.action])
      resolve(query)
    }
  })
}
