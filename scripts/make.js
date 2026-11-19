#!/usr/bin/env node
'use strict'

const { spawnSync } = require('child_process')

const host = process.env.HOST || `${process.platform}-${process.arch}`

const supportedHosts = new Set([
  'darwin-arm64',
  'darwin-x64',
  'linux-arm64',
  'linux-x64',
  'win32-arm64',
  'win32-x64'
])

if (!supportedHosts.has(host)) {
  console.error(`Unsupported platform/arch: ${host}`)
  console.error(
    'Supported targets: darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64, win32-x64'
  )
  process.exit(1)
}

const isWindows = process.platform === 'win32'
const buildArgs = ['--name', 'speedtest-p2p', '--standalone', '--host', host, '--out', './out/make', 'bin.mjs']

const res = isWindows
  ? spawnSync('bare-build', buildArgs, { stdio: 'inherit', shell: true })
  : spawnSync('bare-build', buildArgs, { stdio: 'inherit' })

if (res.error) {
  console.error(res.error.message)
  process.exit(1)
}
if (res.status !== 0) process.exit(res.status || 1)
