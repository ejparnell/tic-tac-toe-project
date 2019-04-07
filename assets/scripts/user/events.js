const api = require('./api.js')
const ui = require('./ui.js')
const gameUi = require('../game/ui.js')

const newGameBoard = function (event) {
  api.createBoard()
    .then(gameUi.onSuccess)
    .catch(ui.onFailure)
}
const getGames = function () {
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onFailure)
}

const userHandlers = function () {
  $('#new-game').on('click', newGameBoard)
  $('#get-games').on('click', getGames)
}
module.exports = {
  userHandlers
}
