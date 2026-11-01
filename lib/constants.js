'use strict'

const b4a = require('b4a')
const { createHash } = require('bare-crypto')
const env = require('bare-env')

const PHASE_DURATION = 8_000

module.exports = {
  TOPIC: createHash('sha256').update('speedtest-p2p/public/v1\0').digest(),
  HELLO: b4a.from('speedtest-p2p/3'),
  DOWNLOAD: b4a.from('speedtest-p2p/download'),
  UPLOAD: b4a.from('speedtest-p2p/upload'),
  STOP: b4a.from('speedtest-p2p/stop'),
  DATA: b4a.alloc(64 * 1024),
  MAX_PEERS: 32,
  DURATION: PHASE_DURATION * 2,
  PHASE_DURATION,
  REPORT_TIMEOUT: 10_000,
  DISCOVERY_INTERVAL: 2_000,
  TARGET_TIMEOUT: 10_000,
  SESSION_TIMEOUT: 30_000,
  MAX_REPORT: 1024,
  BOOTSTRAP: env.SPEEDTEST_P2P_BOOTSTRAP?.split(',')
}
