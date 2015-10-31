'use strict'

const got = require('got')

module.exports = function() {
  let url = 'https://status.github.com/api/last-message.json'

  return got(url, { json: true })
    .then(response => {
      return response.body.body
    })
    .catch(error => {
      return error.response.body
    })
}
