'use strict'

const getData = require('./get-data')
const logger = require('./logger')

module.exports = async query => {
  if (query.action === 'students') {
    logger('info', ['handle-classes', 'action', 'students', 'groupId', query.id])
    const url = `${process.env.BUDDY_API}/groups/${query.id}/students`
    const data = await getData(url)
    return data
  } else {
    logger('warn', ['handle-classes', 'action', 'unknown action', query.action])
    return query
  }
}
