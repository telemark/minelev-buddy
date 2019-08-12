'use strict'

const resolveAction = require('./resolve-action')
const verifyJwt = require('./verify-jwt')

module.exports = async request => {
  const url = new URL(`https://${request.headers.host}${request.url}`)
  const data = ['POST', 'PUT'].includes(request.method) ? request.body : request.query
  const verified = await verifyJwt(request)
  const action = resolveAction({ pathname: url.pathname, method: request.method })
  return Object.assign(verified, { data: data }, action)
}
