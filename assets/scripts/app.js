'use strict'
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')
const gameApi = require('./user/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  gameEvents.gameHandlers()
  authEvents.authHandlers()
  gameApi.userHandlers()
})
