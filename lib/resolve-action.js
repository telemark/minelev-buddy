'use strict'

module.exports = data => {
  const list = data.pathname.split('/').filter(line => line !== '')

  let result = {
    domain: 'frontpage',
    method: data.method,
    action: ''
  }

  if (list.includes('students') && !list.includes('classes')) {
    result.domain = 'students'
    if (list.includes('contactteachers')) {
      result.action = 'contactteachers'
      result.id = list[1]
    } else if (list.length === 2) {
      result.action = 'student'
      result.id = list[1]
    } else if (list.length === 1) {
      result.action = 'search'
    }
  } else if (list.includes('teachers')) {
    result.domain = 'teachers'
    if (list.includes('contactclasses')) {
      result.action = 'contactclasses'
      result.id = list[1]
    } else if (list.includes('all')) {
      result.action = 'all'
    }
  } else if (list.includes('classes')) {
    result.domain = 'classes'
    if (list.includes('students')) {
      result.action = 'students'
      result.id = list[1]
    }
  }

  return result
}
