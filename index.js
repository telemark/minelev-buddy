'use strict'

const resolveRequest = require('./lib/resolve-request')
const handleStudents = require('./lib/handle-students')
const handleTeachers = require('./lib/handle-teachers')
const handleClasses = require('./lib/handle-classes')

module.exports = async (request, response) => {
  console.log(request.url)
  const query = await resolveRequest(request)

  if (!query.isValid && query.domain !== 'frontpage') {
    response.status(401)
    response.json(query)
  } else {
    response.setHeader('Access-Control-Allow-Origin', '*')
    try {
      let result = {}
      if (query.domain === 'students') {
        result = await handleStudents(query)
      } else if (query.domain === 'teachers') {
        result = await handleTeachers(query)
      } else if (query.domain === 'classes') {
        result = await handleClasses(query)
      }
      response.json(result)
    } catch (error) {
      console.error(error)
      response.status(500)
      response.send(error)
    }
  }
}
