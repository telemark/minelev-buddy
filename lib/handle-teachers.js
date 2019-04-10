'use strict'

const config = require('../config')
const getData = require('./get-data')
const logger = require('./logger')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'contactclasses') {
      logger('info', ['handle-teachers', 'action', 'contactclasses', 'teacherId', query.id])
      const url = `${config.BUDDY_API}/users/${query.id}/contactClasses`
      const data = await getData(url)
      resolve(data)
    } else if (query.action === 'all') {
      logger('info', ['handle-teachers', 'action', 'all'])
      const url = `${config.BUDDY_API}/teachers/all`
      const data = await getData(url)
      resolve(data)
    } else {
      logger('warn', ['handle-teachers', 'action', 'unknown action', query.action])
      resolve(query)
    }
  })
}
