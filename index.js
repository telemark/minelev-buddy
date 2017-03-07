'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { send } = require('micro')
const resolveRequest = require('./lib/resolve-request')
const handleStudents = require('./lib/handle-students')
const handleTeachers = require('./lib/handle-teachers')
const handleClasses = require('./lib/handle-classes')

module.exports = async (request, response) => {
  const query = await resolveRequest(request)

  if (!query.isValid && query.domain !== 'frontpage') {
    send(response, 401, query)
  } else {
    if (!query.action === 'frontpage') {
      response.setHeader('Access-Control-Allow-Origin', '*')
    }
    if (query.domain === 'students') {
      const result = await handleStudents(query)
      send(response, 200, result)
    } else if (query.domain === 'teachers') {
      const result = await handleTeachers(query)
      send(response, 200, result)
    } else if (query.domain === 'classes') {
      const result = await handleClasses(query)
      send(response, 200, result)
    } else {
      const readme = readFileSync('./README.md', 'utf-8')
      const html = marked(readme)
      send(response, 200, html)
    }
  }
}
