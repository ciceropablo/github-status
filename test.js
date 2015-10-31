'use strict'

import test from 'ava'
import ghStatus from './'

test('github-status', t => {
  return ghStatus().then(message => {
    t.is(message, 'Everything operating normally.')
  })
})
