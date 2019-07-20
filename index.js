'use strict'

const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { send } = require('micro')
const resolveRequest = require('./lib/resolve-request')
const handleStudents = require('./lib/handle-students')
const handleTeachers = require('./lib/handle-teachers')
const handleClasses = require('./lib/handle-classes')

module.exports = async (request, response) => {
  console.log(request.url)
  const query = await resolveRequest(request)

  if (!query.isValid && query.domain !== 'frontpage') {
    send(response, 401, query)
  } else {
    if (!query.action === 'frontpage') {
      response.setHeader('Access-Control-Allow-Origin', '*')
    }
    try {
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
        send(response, 200, md.render(readme))
      }
    } catch (error) {
      console.error(error)
      send(response, 500, error)
    }
  }
}
