'use strict'

const { json } = require('micro')
const resolveAction = require('./resolve-action')
const verifyJwt = require('./verify-jwt')

function parse (searchParams) {
  const data = {}
  searchParams.forEach((value, name) => {
    data[name] = value
  })
  return data
}

module.exports = async request => {
  const url = new URL(`${request.headers.host}${request.url}`)
  const data = ['POST', 'PUT'].includes(request.method) ? await json(request) : parse(url.searchParams)
  const verified = await verifyJwt(request)
  const action = resolveAction({ pathname: url.pathname, method: request.method })
  return Object.assign(verified, { data: data }, action)
}
