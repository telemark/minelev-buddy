'use strict'

const config = require('../config')
const getData = require('./get-data')
const logger = require('./logger')

module.exports = query => {
  return new Promise(async (resolve, reject) => {
    if (query.action === 'student') {
      logger('info', ['handle-students', 'action', 'student', 'caller', query.caller, 'studentId', query.id])
      const url = `${config.BUDDY_API}/users/${query.caller}/students/${query.id}`
      const data = await getData(url)
      resolve(data)
    } else if (query.action === 'search') {
      logger('info', ['handle-students', 'action', 'search', 'caller', query.caller, 'search', query.data.name])
      const url = `${config.BUDDY_API}/users/${query.caller}/search/${query.data.name}`
      const data = await getData(url)
      resolve(data)
    } else if (query.action === 'contactteachers') {
      logger('info', ['handle-students', 'action', 'contactteachers', 'id', query.id])
      const url = `${config.BUDDY_API}/users/${query.id}/contactTeachers`
      const data = await getData(url)
      resolve(data)
    } else {
      logger('warn', ['handle-students', 'action', 'unknown action', query.action])
      resolve(query)
    }
  })
}
