'use strict'

const { createHash } = require('bare-crypto')

module.exports = function createTopic(value) {
  return createHash('sha256').update('speedtest-p2p/lobby/v1\0').update(String(value)).digest()
}
