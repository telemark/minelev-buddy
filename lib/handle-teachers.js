'use strict'

const config = require('../config')
const getData = require('./get-data')
const logger = require('./logger')

module.exports = async query => {
  if (query.action === 'contactclasses') {
    logger('info', ['handle-teachers', 'action', 'contactclasses', 'teacherId', query.id])
    const url = `${config.BUDDY_API}/users/${query.id}/contactClasses`
    const data = await getData(url)
    return data
  } else if (query.action === 'all') {
    logger('info', ['handle-teachers', 'action', 'all'])
    const url = `${config.BUDDY_API}/teachers/all`
    const data = await getData(url)
    return data
  } else {
    logger('warn', ['handle-teachers', 'action', 'unknown action', query.action])
    return query
  }
}
